import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ToastContainer from './Components/ToastContainer'; 
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Customer from './pages/Customer';
import feather from "feather-icons";
import { useEffect } from 'react';
import Employees from './pages/Employees';
import Loads from './pages/Loads';
import TimeLogs from './pages/TimeLogs';
import UserTable from './pages/UserTable';
import Admin from './pages/Admin';
import RecoverAccount from './pages/Auth/RecoverAccount';


function App() {
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    feather.replace();
  }, []);

  return (
  <BrowserRouter>
      <ToastContainer />

      <Routes>
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/admin/dashboard" />}
        />
        <Route path="/recover-account" element={!token ? <RecoverAccount /> : <Navigate to="/admin/dashboard" />} />
        <Route
          path="/admin/*"
          element={token ? <Admin /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={<Navigate to={token ? "/admin/dashboard" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
