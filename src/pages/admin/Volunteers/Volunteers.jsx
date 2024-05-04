import React from "react";
import { Container, Card, Table, Button } from "react-bootstrap";
import HeroCRUD from "../components/HeroCRUD";
import { useState, useEffect, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import useCustomMaterialTable from "../../../utils/materialTableConfig.js";
import autoTable from "jspdf-autotable";
import { jsPDF } from "jspdf";
import { format } from "date-fns";
import { QueryClient, QueryClientProvider, useQueryClient,   useMutation,} from "@tanstack/react-query";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { getVolunteers, deleteVolunteer, createVolunteer } from "../../../services/Volunteer";
import swal from 'sweetalert';
import {
  Box,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';

const MaterialTable = () => {
  const [data, setData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVolunteers();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const {
    isError: isLoadingError,
    isFetching: isFetching,
    isLoading: isLoading,
  } = getVolunteers();

  const { mutateAsync: update, isPending: isUpdating } = useUpdate();

    const handleSave = async () => {
      if (Object.values(validationErrors).some((error) => !!error)) return;
      await update(Object.values(editedUsers));
      setEditedData({});
    };

  const handleDelete = async (id) => {
    swal({
      title: "¿Está seguro?",
      text: "El registro será eliminado",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then(async (willDelete) => {
        if (willDelete) {
          try {
            await deleteVolunteer(id);
            const newData = data.filter((item) => item.id !== id);
            setData(newData);
            swal("Eliminado con éxito", {
              icon: "success",
            });
          } catch (error) {
            console.error("Error deleting data:", error);
          }
        } else {
          swal("El registro no se eliminó");
        }
      });
  };


  const columns = useMemo(
    () => [
      {
        accessorKey: "cedula",
        header: "Cédula",
        enableClickToCopy: true,
        enableEditing: false,

      },
      {
        accessorKey: "name",
        header: "Nombre",
        enableClickToCopy: true,
        enableEditing: false,
      },
      {
        accessorKey: "lastName1",
        header: "Primer Apellido",
        enableClickToCopy: true,
        enableEditing: false,
      },
      {
        accessorKey: "lastName2",
        header: "Segundo Apellido",
        enableClickToCopy: true,
        enableEditing: false,
      },
      {
        accessorKey: "birthday",
        header: "Nacimiento",
        enableClickToCopy: true,
        enableEditing: false,
        Cell: ({ row }) => {
          return (<span>{format(new Date(row.original.birthday), "yyyy-MM-dd")}</span>);
        }
      },
      {
        accessorKey: "address",
        header: "Dirección",
        enableClickToCopy: true,
        enableEditing: false,
      },

      {
        accessorKey: "itsVerified",
        header: "Verificado",
        editVariant: 'select',
        // Cell: ({ row }) => {
        //   return (<span>{row.original.itsVerified === 1 ? "Verificado" : "No verificado"}</span>);
        // },
        editSelectOptions: [`Verificado`, `No verificado`],
        muiEditTextFieldProps: ({ row }) => ({
          select: true,
          error: !!validationErrors?.itsVerified,
          helperText: validationErrors?.itsVerified,
          onChange: (event) =>
            setEditedData({
              ...editedData,
              [row.id]: {id: row.original.id, itsVerified: event.target.value},
            }),
            Cell: ({ row }) => {
              return (<span>{row.original.itsVerified === 1 ? "Verificado" : "No verificado"}</span>);
            },
        }),
        
      },
    ],
    [editedData, validationErrors],
  );

  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableData = rows.map((row) => Object.values(row.original));
    const tableHeaders = columns.map((c) => c.header);

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    const currentDate = new Date();
    const formattedDate = format(currentDate, "yyyy-MM-dd");
    doc.save(`Reporte Voluntarios ${formattedDate}.pdf`);
  };


  const table = useCustomMaterialTable({
    columns,
    data: data,
    isLoading,
    isLoadingError,
    isFetching,

    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Actualizar datos">
          <Button
          // onClick={() => handleUpdate(row.original)}
          >
            <FaEdit />
          </Button>
        </Tooltip>

        <Tooltip title="Eliminar">
          <Button
            onClick={() => handleDelete(row.original.id)}
          >
            <MdDelete />
          </Button>
        </Tooltip>
      </Box>
    ),

    renderTopToolbarCustomActions: ({ table }) => (
      <>
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
        >
          <FaFilePdf />
        </Button>
      </>
    ),

    renderBottomToolbarCustomActions: () => (
      <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button
          color="success"
          variant="contained"
          onClick={handleSave}
          disabled={
            Object.keys(editedData).length === 0 ||
            Object.values(validationErrors).some((error) => !!error)
          }
        >
          {isUpdating ? <CircularProgress size={25} /> : 'Guardar'}
        </Button>
        {Object.values(validationErrors).some((error) => !!error) && (
          <Typography color="error">Corregir errores antes de enviar</Typography>
        )}
      </Box>
    ),
    state: {
      isLoading: isLoading,
      isSaving: isUpdating,
      showAlertBanner: isLoadingError,
      showProgressBars: isFetching,
    },

  });

  return <MaterialReactTable table={table} />;
};

const queryClient = new QueryClient();

function useUpdate() {

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (users) => {
      console.log(JSON.stringify(users))

      // await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      // return Promise.resolve();

    },
    // onMutate: (newUsers) => {
    //   queryClient.setQueryData(['users'], (prevUsers) =>
    //     prevUsers?.map((user) => {
    //       const newUser = newUsers.find((u) => u.id === user.id);
    //       return newUser ? newUser : user;
    //     }),
    //   );
    // },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });

}


const Volunteers = () => (
  <>
    <div className="text-center">
      <HeroCRUD text={"Voluntarios"} />
    </div>
    <Card className="cardHeroCRUD shadow">
      {/* <Card.Body>
        <div className="d-flex justify-content-between">
          <Button>Nuevo voluntario</Button>
          <input type="text" />
        </div>
      </Card.Body> */}
    </Card>
    <Container>
      <div className="table-container">
        <hr className="divider" />
        <QueryClientProvider client={queryClient}>
          <MaterialTable />
        </QueryClientProvider>
      </div>
    </Container>
  </>
);

export default Volunteers;
