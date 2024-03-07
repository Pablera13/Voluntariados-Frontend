import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminLayout() {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Panel</CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/admin/volunteering"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="table">
                Voluntariados
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/admin/activities"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="table">Actividades</CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/admin/volunteers"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">Voluntarios</CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/admin/companies"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">Empresas</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/admin/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Usuarios</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link to={'/'}>
              <Button>Volver a inicio</Button>
            </Link>
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <div className="d-flex flex-column h-100 w-100">
      <Outlet />
      </div>
      
    </div>
  );
}

export default AdminLayout;
