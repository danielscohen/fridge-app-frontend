import './index.css';
import { Register, Home, Login, Layout, Admin, Missing, RequireAuth, Unauthorized } from './components';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const ROLES = {
  'User': 2001,
  'Admin': 5150
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Route>
    </Route>
  )
)
const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
