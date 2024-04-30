import React from "react";
import { Container, Card, Table, Button } from "react-bootstrap";
import HeroCRUD from "../components/HeroCRUD";
import { useState, useEffect, useMemo } from "react";
import { Box, Tooltip } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import useCustomMaterialTable from "../../../utils/materialTableConfig.js";
import autoTable from "jspdf-autotable";
import { jsPDF } from "jspdf";
import { format } from "date-fns";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { getVolunteerings } from "../../../services/Volunteering";

const MaterialTable = () => {
  const [data, setData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVolunteerings();
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
  } = getVolunteerings();

  // const handleUpdate = async (updatedData) => {
  //   try {
  //     await updateVolunteer(updatedData);
  //     setEditedData({});
  //   } catch (error) {
  //     console.error("Error updating data:", error);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await deleteVolunteer(id);
  //     const newData = data.filter((item) => item.id !== id);
  //     setData(newData);
  //   } catch (error) {
  //     console.error("Error deleting data:", error);
  //   }
  // };


//   projectName varchar(500) 
// startDate datetime 
// finishDate datetime 
// category varchar(255) 
// quotas int 
// description varchar(500) 
// requirements varchar(500) 
// contact varchar(500)


  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Nombre",
        enableClickToCopy: true,
        enableEditing: false,

      },
      {
        accessorKey: "description",
        header: "Descripción",
        enableClickToCopy: true,
        enableEditing: false,
      },
      {
        accessorKey: "date",
        header: "Fecha",
        enableClickToCopy: true,
        enableEditing: false,
        Cell: ({ row }) => { 
          return (<span>{format(new Date(row.original.date), "yyyy-MM-dd")}</span>);
        }
      },
      {
        accessorKey: "address",
        header: "Dirección",
        enableClickToCopy: true,
        enableEditing: false,
      },
      {
        accessorKey: "category",
        header: "Categoría",
        enableClickToCopy: true,
        enableEditing: false,
      },
      {
        accessorKey: "quota",
        header: "Cuota",
        enableClickToCopy: true,
        enableEditing: false,
        Cell: ({ row }) => { 
          return (<span>{row.original.quota} asistentes</span>);
        }
      },
      {
        accessorKey: "contact",
        header: "Contacto",
        enableClickToCopy: true,
        enableEditing: false,
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
    doc.save(`Reporte Voluntariados${formattedDate}.pdf`);
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
          // onClick={() => handleDelete(row.original.id)}
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
  });

  return <MaterialReactTable table={table} />;
};

const queryClient = new QueryClient();

const AdminVolunteering = () => (
  <>
<div className="text-center">
    <HeroCRUD text={"Voluntariados"} />
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

export default AdminVolunteering;
