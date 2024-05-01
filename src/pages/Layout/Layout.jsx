import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, Link } from "react-router-dom";
import Logo from '../../assets/logo.png'

function Layout({children}) {
  return (
    <>
      <Navbar expand="lg" sticky="top" className="shadow" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/"><img src={Logo} alt="" className="w-25"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/" className="mx-1 navItem">
              Inicio
            </Nav.Link>
            <Nav.Link href="/volunteering" className="mx-1 navItem">
              Voluntariado
            </Nav.Link>
            <Nav.Link href="/activities" className="mx-1 navItem">
              Actividades
            </Nav.Link>
            <Nav.Link href="/organization" className="mx-1 navItem">
              Organizaciones
            </Nav.Link>
            <NavDropdown title="Formularios" id="basic-nav-dropdown" className="mx-1 navItem">
              <NavDropdown.Item href="/form-volunteer">Ser voluntario</NavDropdown.Item>
              <NavDropdown.Item href="/form-organization">Ser organizacion</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Perfil" id="basic-nav-dropdown" className="mx-1 navItem">
              <NavDropdown.Item href="/login">Iniciar Sesion</NavDropdown.Item>
              <NavDropdown.Item href="/admin/panel">Administrar</NavDropdown.Item>
              <NavDropdown.Item href="/profile">Mi perfil</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Cerrar Sesion</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>{children}</main>
    </>
  );
}

export default Layout;
