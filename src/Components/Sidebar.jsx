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
    { path: "/admin", name: "Dashboard", icon: "monitor", sequence: 1 },
    { path: "/admin/users", name: "Users", icon: "user", sequence: 3 },
    { path: "/admin/customer", name: "Customer", icon: "users", sequence: 2 },
    { path: "/admin/employees", name: "Employees", icon: "user-check", sequence: 4 },
    { path: "/admin/time-logs", name: "Time Logs", icon: "clock", sequence: 5 },
    { path: "/admin/loads", name: "Loads", icon: "truck", sequence: 6 },
    { path: "logout", name: "Logout", icon: "log-out", sequence: 7, onClick: handleLogout }
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
