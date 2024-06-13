import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";
import Home from "../pages/home/Home";
import Layout from "../pages/Layout/Layout";
import Volunteering from "../pages/volunteering/Volunteering";
import DetailVolunteering from "../pages/volunteering/components/DetailVolunteering";
import Activities from "../pages/activities/Activities";
import Organization from "../pages/organization/Organization";
import FormVolunteer from "../pages/forms/FormVolunteer.tsx";
import FormOrganization from "../pages/forms/FormOrganization.tsx";
import Profile from "../pages/profile/Profile";
import DetailOrganization from "../pages/organization/components/DetailOrganization";
import AdminLayout from "../pages/admin/adminLayout/AdminLayout";
import AdminPanel from "../pages/admin/AdminPanel";
import DetailActivities from "../pages/activities/components/DetailActivities.jsx";
import AdminVolunteering from "../pages/admin/adminVolunteering/AdminVolunteering";
import CreateVolunteering from "../pages/admin/adminVolunteering/components/CreateVolunteering";
import AdminActivities from "../pages/admin/adminActivities/AdminActivities";
import Volunteers from "../pages/admin/Volunteers/Volunteers";
import Companies from "../pages/admin/Companies/Companies";
import CreateCompany from "../pages/admin/Companies/components/CreateCompany";
import Users from "../pages/admin/users/Users";
import Login from "../pages/login/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import Logout from "../pages/logout/Logout";
const Routes = () => {
  const { token } = useAuth();
  const queryClient = new QueryClient();
  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/form-volunteer",
      element: (
        <Layout>
          <FormVolunteer />
        </Layout>
      ),
    },
    {
      path: "/form-organization",
      element: (
        <Layout>
          <FormOrganization />
        </Layout>
      ),
    },
  ];

 // Define routes accessible only to authenticated users
 const routesForAuthenticatedOnly = [
  {
    path: "/",
    element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
    children: [
      {
        path: "volunteering",
        element: (
          <Layout>
            <Volunteering />
          </Layout>
        ),
      },
      {
        path: "volunteering/:volunteeringId",
        element: (
          <Layout>
            <DetailVolunteering />
          </Layout>
        ),
      },
      {
        path: "activities",
        element: (
          <Layout>
            <Activities />
          </Layout>
        ),
      },
      {
        path: "activities/:activitiesId",
        element: (
          <Layout>
            <DetailActivities />
          </Layout>
        ),
      },
      {
        path: "organization",
        element: (
          <Layout>
            <Organization />
          </Layout>
        ),
      },

      {
        path: "profile",
        element: (
          <Layout>
            <Profile />
          </Layout>
        ),
      },
      {
        path: "organization/:organizationId",
        element: (
          <Layout>
            <DetailOrganization />
          </Layout>
        ),
      },

      {
        path: "admin/",
        element: (<AdminLayout/>),
        children: [
          {
            path: "panel",
            element: (<AdminPanel/>),
          },
          {
            path: "volunteering",
            element: (<AdminVolunteering/>),
          },
          {
            path: "volunteering/create",
            element: (<CreateVolunteering/>),
          },
          {
            path: "activities",
            element: (<AdminActivities/>),
          },
          {
            path: "volunteers",
            element: (<Volunteers/>),
          },
          {
            path: "companies",
            element: (<Companies/>),
          },
          {
            path: "companies/create",
            element: (<CreateCompany/>),
          },
          {
            path: "users",
            element: (<Users/>),
          },
        ]
      },
      {
        path: "logout",
        element: <Logout/>,
      },
    ],
  },
];

// Define routes accessible only to non-authenticated users
const routesForNotAuthenticatedOnly = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/form-volunteer",
    element: (
      <Layout>
        <FormVolunteer />
      </Layout>
    ),
  },
  {
    path: "/form-organization",
    element: (
      <Layout>
        <FormOrganization />
      </Layout>
    ),
  },
];

// Combine and conditionally include routes based on authentication status
const router = createBrowserRouter([
  ...routesForPublic,
  ...(!token ? routesForNotAuthenticatedOnly : []),
  ...routesForAuthenticatedOnly,
]);

// Provide the router configuration using RouterProvider
return (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
};

export default Routes;
