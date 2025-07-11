import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
          <Navbar />
        <Sidebar />
      <div className="content-wrapper">
        <div className="container-full">
        
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
      
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
