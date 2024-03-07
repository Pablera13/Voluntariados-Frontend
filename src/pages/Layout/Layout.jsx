import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/" className="mx-1">
              Inicio
            </Nav.Link>
            <Nav.Link href="/volunteering" className="mx-1">
              Voluntariado
            </Nav.Link>
            <Nav.Link href="/activities" className="mx-1">
              Actividades
            </Nav.Link>

            <NavDropdown title="Perfil" id="basic-nav-dropdown" className="mx-1">
              <NavDropdown.Item href="/login">Iniciar Sesion</NavDropdown.Item>
              <NavDropdown.Item href="/admin">Administrar</NavDropdown.Item>
              <NavDropdown.Item href="/miperfil/:">Mi perfil</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default Layout;
