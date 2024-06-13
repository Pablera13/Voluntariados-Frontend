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
import { FaEdit, FaFilePdf } from "react-icons/fa";
import { getCompanies, deleteCompany, updateCompanyVerification } from "../../../services/CompanyService";
import swal from 'sweetalert';

const MaterialTable = () => {
  const [data, setData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCompanies();
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
  } = getCompanies();

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
            await deleteCompany(id);
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
        accessorKey: "address",
        header: "Dirección",
        enableClickToCopy: true,
        enableEditing: false,
      },
      {
        accessorKey: "bankaccount",
        header: "Cuenta IBAN",
        enableClickToCopy: true,
        enableEditing: false,
        Cell: ({ row }) => {
          return (<span>CR{row.original.bankaccount}</span>);
        },
      },
      {
        accessorKey: "verified",
        header: "Verificado",
        enableClickToCopy: true,
        Cell: ({ row }) => {
          return (
            <select
              value={row.original.verified ? "Verificado" : "No verificado"}
              onChange={async (e) => {
                const newValue = e.target.value === "Verificado";
                swal({
                  title: "¿Está seguro?",
                  text: `¿Desea cambiar el estado a ${newValue ? "Verificado" : "No verificado"}?`,
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                  .then(async (willDelete) => {
                    if (willDelete) {
                      try {
                        const newCompany = {
                          verified: newValue,
                        };
                        await updateCompanyVerification(row.original.id, newCompany);
                        const updatedData = data.map((item) =>
                          item.id === row.original.id ? { ...item, verified: newValue } : item
                        );
                        setData(updatedData);
                        swal("Actualizado con éxito", {
                          icon: "success",
                        });
                      } catch (error) {
                        console.error("Error updating data:", error);
                      }
                    }
                  });
              }}
            >
              <option value="Verificado">Verificado</option>
              <option value="No verificado">No verificado</option>
            </select>
          );
        },
        editVariant: 'select',
        editSelectOptions: ["Verificado", "No verificado"],
        muiEditTextFieldProps: ({ row }) => ({
          select: true,
          error: !!validationErrors?.verified,
          helperText: validationErrors?.verified,
          onChange: (event) =>
            setEditedData({
              ...editedData,
              [row.id]: { ...row.original, verified: event.target.value },
            }),
        }),
      },
    ],
    [editedData, validationErrors, data]
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
    doc.save(`Reporte Organizaciones ${formattedDate}.pdf`);
  };

  const table = useCustomMaterialTable({
    columns,
    data: data,
    isLoading,
    isLoadingError,
    isFetching,

    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Eliminar">
          <Button onClick={() => handleDelete(row.original.id)}>
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

const Companies = () => (
  <>
    <div className="text-center">
      <HeroCRUD text={"Organizaciones"} />
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

export default Companies;
