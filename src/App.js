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


function App() {
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
  
      <Routes>
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/dashboard" />} />
       
        <Route
          path="/*"
          element={
            token ? (
              <div className="wrapper">
                <Navbar />
                <Sidebar />
                <div className="content-wrapper">
                  <div className="container-full">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/customer" element={<Customer />} />
                      <Route path="/employees" element={<Employees />} />
                      <Route path="/time-logs" element={<TimeLogs />} />
                      <Route path="/loads" element={<Loads />} />
                      <Route path="/users" element={<UserTable />} />
                      
                    </Routes>
                  </div>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
