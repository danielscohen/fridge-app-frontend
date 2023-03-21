import './index.css';
import { Register, Home, Login, Layout } from './components';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route element={<RequireAuth />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
