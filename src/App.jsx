import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./context/AuthContext";
import Routes from "./utils/Routes";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          
          <Routes />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

{
  /* <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/volunteering" element={<Volunteering />} />
              <Route path="/volunteering/:volunteeringId" element={<DetailVolunteering/>}/>

              <Route path="/activities" element={<Activities />} />
              <Route path="/activities/:activitiesId" element={<DetailActivities/>}/>

              <Route path="/organization" element={<Organization/>}/>
              <Route path="/form-volunteer" element={<FormVolunteer />} />
              <Route path="/form-organization" element={<FormOrganization />} />
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/organization/:organizationId" element={<DetailOrganization/>}/>

            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminPanel />} />
              <Route
                path="/admin/volunteering"
                element={<AdminVoluntering />}
              />
              <Route
                path="/admin/volunteering/create"
                element={<CreateVolunteering />}
              />
              <Route path="/admin/activities" element={<AdminActivities />} />
              <Route path="/admin/volunteers" element={<Volunteers />} />
              <Route path="/admin/companies" element={<Companies />} />
              <Route path="/admin/companies/create" element={<CreateCompany />} />
              <Route path="/admin/users" element={<Users />} />
            </Route>
          </Routes>
        </BrowserRouter> */
}
