import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import feather from "feather-icons";
import Swal from "sweetalert2";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    feather.replace();
  }, []);

  const handleLogout = () => {
     Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
     if(result.isConfirmed){
      localStorage.clear();
      window.location.href = "/login";
     }
     
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
   
  };

  const navItems = [
    { path: "/", name: "Dashboard", icon: "monitor", sequence: 1 },
    { path: "/customer", name: "Customer", icon: "users", sequence: 2 },
    { path: "/employees", name: "Employees", icon: "user-check", sequence: 3 },
    { path: "/time-logs", name: "Time Logs", icon: "clock", sequence: 4 },
    { path: "/loads", name: "Loads", icon: "truck", sequence: 5 },
    { path: "logout", name: "Logout", icon: "log-out", sequence: 6, onClick: handleLogout }
  ].sort((a, b) => a.sequence - b.sequence);

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="main-sidebar">
      <section className="sidebar position-relative">
        <div className="multinav">
          <div className="multinav-scroll" style={{ height: "100%" }}>
            <ul className="sidebar-menu tree" data-widget="tree">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`treeview ${isActive(item.path) ? "active" : ""}`}
                >
                  {item.path === "logout" ? (
                    <a onClick={item.onClick} style={{cursor: 'pointer'}}>
                      <i data-feather={item.icon}></i>
                      <span>{item.name}</span>
                    </a>
                  ) : (
                    <Link to={item.path}>
                      <i data-feather={item.icon}></i>
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
