import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ToastContainer from './Components/ToastContainer'; 
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';


function App() {
  const { token } = useSelector((state) => state.auth);

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
