import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <header className="main-header">
      <div className="d-flex align-items-center logo-box justify-content-start">
        <Link to="/" className="logo">
          <div className="logo-mini w-50">
            <span className="light-logo">
              <img src="../images/logo-letter.png" alt="logo" />
            </span>
            <span className="dark-logo">
              <img src="../images/logo-letter.png" alt="logo" />
            </span>
          </div>
          <div className="logo-lg">
            <span className="light-logo">
              <img src="../images/logo-light-text.png" alt="logo" />
            </span>
            <span className="dark-logo">
              <img src="../images/logo-light-text.png" alt="logo" />
            </span>
          </div>
        </Link>
      </div>

      <nav className="navbar navbar-static-top">
        <div className="app-menu">
          <ul className="header-megamenu nav">
            <li className="btn-group nav-item">
              <button 
                onClick={handleNav}
                className="waves-effect waves-light nav-link push-btn btn-primary-light"
              >
                {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
            </li>
            <li className="btn-group d-lg-inline-flex d-none">
              <div className="app-menu">
                <div className="search-bx mx-5">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                      <input 
                        type="search" 
                        className="form-control" 
                        placeholder="Search" 
                        aria-label="Search"
                      />
                      <div className="input-group-append">
                        <button className="btn" type="submit">
                          <i className="feather-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="navbar-custom-menu r-side">
          <ul className="nav navbar-nav">
            <li className="btn-group nav-item d-xl-inline-flex d-none">
              <Link to="/findspace" className="waves-effect waves-light nav-link w-p100 full-screen btn-primary-light fs-18 l-h-26">
                Find A Space
              </Link>
            </li>
            <li className="btn-group nav-item d-xl-inline-flex d-none">
              <Link to="/vendor" className="waves-effect waves-light nav-link w-p100 full-screen btn-primary-light fs-18 l-h-26">
                Vendor
              </Link>
            </li>
            <li className="btn-group nav-item d-xl-inline-flex d-none">
              <Link to="/help" className="waves-effect waves-light nav-link w-p100 full-screen btn-primary-light fs-18 l-h-26">
                Help
              </Link>
            </li>
            <li className="btn-group nav-item d-xl-inline-flex d-none">
              <Link to="/qa" className="waves-effect waves-light nav-link w-p100 full-screen btn-primary-light fs-18 l-h-26">
                Q&A
              </Link>
            </li>

            <li className="dropdown notifications-menu">
              <button
                onClick={toggleNotifications}
                className="waves-effect waves-light dropdown-toggle btn-info-light"
              >
                <i className="feather-bell"></i>
              </button>
              {showNotifications && (
                <ul className="dropdown-menu animated bounceIn">
                  <li className="header">
                    <div className="p-20">
                      <div className="flexbox">
                        <div>
                          <h4 className="mb-0 mt-0">Notifications</h4>
                        </div>
                        <div>
                          <button className="text-danger">Clear All</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Notification items */}
                </ul>
              )}
            </li>

            <li className="btn-group nav-item">
              <button className="waves-effect full-screen waves-light btn-danger-light">
                <i className="feather-settings"></i>
              </button>
            </li>

            <li className="dropdown user user-menu">
              <button
                onClick={toggleUserMenu}
                className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent py-0 no-shadow"
              >
                <img 
                  src="../images/avatar/avatar-1.png" 
                  className="avatar rounded-10 bg-primary-light h-40 w-40" 
                  alt="user" 
                />
              </button>
              {showUserMenu && (
                <ul className="dropdown-menu animated flipInX">
                  <li className="user-body">
                    <Link className="dropdown-item" to="/profile">
                      <i className="ti-user text-muted me-2"></i> Profile
                    </Link>
                    <Link className="dropdown-item" to="/mailbox">
                      <i className="ti-settings text-muted me-2"></i> Email
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/login">
                      <i className="ti-lock text-muted me-2"></i> Logout
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
