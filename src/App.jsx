import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Layout from "./pages/Layout/Layout.jsx";
import Login from "./pages/login/Login.jsx";
import Volunteering from "./pages/volunteering/Volunteering.jsx";
import Activities from "./pages/activities/Activities.jsx";
import AdminLayout from "./pages/admin/adminLayout/AdminLayout.jsx";
import AdminPanel from "./pages/admin/AdminPanel.jsx";
import AdminVoluntering from "./pages/admin/adminVolunteering/AdminVolunteering.jsx";
import AdminActivities from "./pages/admin/adminActivities/AdminActivities.jsx";
import Companies from "./pages/admin/Companies/Companies.jsx";
import Volunteers from "./pages/admin/Volunteers/Volunteers.jsx";
import Users from "./pages/admin/users/Users.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import CreateCompany from "./pages/admin/Companies/components/CreateCompany.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/volunteering" element={<Volunteering />} />
              <Route path="/activities" element={<Activities />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminPanel />} />
              <Route
                path="/admin/volunteering"
                element={<AdminVoluntering />}
              />
              <Route path="/admin/activities" element={<AdminActivities />} />
              <Route path="/admin/volunteers" element={<Volunteers />} />
              <Route path="/admin/companies" element={<Companies />} />
              <Route path="/admin/companies/create" element={<CreateCompany />} />
              <Route path="/admin/users" element={<Users />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
