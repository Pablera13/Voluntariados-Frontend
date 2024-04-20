import React from "react";
import { Container, Card, Table, Button } from "react-bootstrap";
import HeroCRUD from "../components/HeroCRUD";
import { getVolunteers } from "../../../services/Volunteer";
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

const MaterialTable = () => {
  const [data, setData] = useState([]);

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

  const columns = useMemo(
    () => [
      {
        accessorKey: "cedula",
        header: "Cédula",
        enableClickToCopy: true,
      },
      {
        accessorKey: "name",
        header: "Nombre",
        enableClickToCopy: true,
      },
      {
        accessorKey: "lastName1",
        header: "Primer Apellido",
        enableClickToCopy: true,
      },
      {
        accessorKey: "lastName2",
        header: "Segundo Apellido",
        enableClickToCopy: true,
      },
      {
        accessorKey: "birthday",
        header: "Nacimiento",
        enableClickToCopy: true,
      },
      {
        accessorKey: "address",
        header: "Dirección",
        enableClickToCopy: true,
      },
    ],
    []
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
        <Tooltip title="Actualizar datos del voluntario ">
          <Button>
            {" "}
            <FaEdit />{" "}
          </Button>
        </Tooltip>

        <Tooltip title="Eliminar voluntario">
          <Button>
            {" "}
            <MdDelete />{" "}
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
          Exportar en PDF
        </Button>
      </>
    ),
  });

  return <MaterialReactTable table={table} />;
};

const queryClient = new QueryClient();

const Volunteers = () => (
  <>
    <HeroCRUD text={"Voluntarios"} />
    <Card className="cardHeroCRUD shadow">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Button>Nuevo voluntario</Button>
          <input type="text" />
        </div>
      </Card.Body>
    </Card>
    <Container>
      <div className="table-container">
        <h2 className="table-title">Voluntarios</h2>
        <hr className="divider" />
        <QueryClientProvider client={queryClient}>
          <MaterialTable />
        </QueryClientProvider>
      </div>
    </Container>
  </>
);

export default Volunteers;
