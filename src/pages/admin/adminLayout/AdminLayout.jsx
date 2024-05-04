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
import Nav from "react-bootstrap/Nav";

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
            <NavLink exact to="/admin/panel" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">Panel</CDBSidebarMenuItem>
            </NavLink>

            {/* <Nav.Link href="/admin/panel" className="mx-1 navItem">
              <CDBSidebarMenuItem icon="columns">Panel</CDBSidebarMenuItem>
            </Nav.Link> */}

            <NavLink
              exact
              to="/admin/companies"
              activeclassname="activeClicked"
            >
              <CDBSidebarMenuItem icon="building">Organizaciones</CDBSidebarMenuItem>
            </NavLink>


            <NavLink
              exact
              to="/admin/volunteering"
              activeclassname="activeClicked"
            >
              <CDBSidebarMenuItem icon="user-check">
                Voluntariados
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/admin/activities"
              activeclassname="activeClicked"
            >
              <CDBSidebarMenuItem icon="binoculars">Eventos</CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/admin/volunteers"
              activeclassname="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">Voluntarios</CDBSidebarMenuItem>
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
              <Button variant="dark"><i class="fa fa-arrow-left" aria-hidden="true"></i></Button>
            </Link>

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
