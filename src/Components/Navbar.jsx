import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import feather from 'feather-icons';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
    useEffect(() => {
    feather.replace(); // this will replace all data-feather with SVGs
  }, []);

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
    {/* Logo */}
    <Link to="/" className="logo">
      {/* logo */}
      <div className="logo-mini w-50">
        <span className="light-logo"><img src="../images/logo-letter.png" alt="logo" /></span>
        <span className="dark-logo"><img src="../images/logo-letter.png" alt="logo" /></span>
      </div>
      <div className="logo-lg">
        <span className="light-logo"><img src="../images/logo-light-text.png" alt="logo" /></span>
        <span className="dark-logo"><img src="../images/logo-light-text.png" alt="logo" /></span>
      </div>
    </Link>
  </div>

  {/* Header Navbar */}
  <nav className="navbar navbar-static-top">
    {/* Sidebar toggle button*/}
    <div className="app-menu">
      <ul className="header-megamenu nav">
        <li className="btn-group nav-item">
          <button onClick={handleNav} className="waves-effect waves-light nav-link push-btn btn-primary-light">
            <i data-feather="align-left"></i>
          </button>
        </li>
        <li className="btn-group d-lg-inline-flex d-none">
          <div className="app-menu">
            <div className="search-bx mx-5">
              <form>
                <div className="input-group">
                  <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
                  <div className="input-group-append">
                    <button className="btn" type="submit" id="button-addon3"><i data-feather="search"></i></button>
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
        <li className="btn-group nav-item d-lg-inline-flex d-none">
          <button className="waves-effect waves-light nav-link full-screen btn-warning-light" title="Full Screen">
            <i data-feather="maximize"></i>
          </button>
        </li>

        {/* Notifications */}
        <li className="dropdown notifications-menu">
          <button onClick={toggleNotifications} className="waves-effect waves-light dropdown-toggle btn-info-light" title="Notifications">
            <i data-feather="bell"></i>
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
                      <a href="#" className="text-danger">Clear All</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <ul className="menu sm-scrol">
                  <li>
                    <a href="#">
                      <i className="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
                    </a>
                  </li>
                  {/* Other notification items */}
                </ul>
              </li>
              <li className="footer">
                <a href="#">View all</a>
              </li>
            </ul>
          )}
        </li>

        {/* Control Sidebar Toggle Button */}
        <li className="btn-group nav-item">
          <button className="waves-effect full-screen waves-light btn-danger-light" title="Setting">
            <i data-feather="settings"></i>
          </button>
        </li>

        {/* User Account */}
        <li className="dropdown user user-menu">
          <button onClick={toggleUserMenu} className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent py-0 no-shadow" title="User">
            <img src="../images/avatar/avatar-1.png" className="avatar rounded-10 bg-primary-light h-40 w-40" alt="" />
          </button>
          {showUserMenu && (
            <ul className="dropdown-menu animated flipInX">
              <li className="user-body">
                <Link className="dropdown-item" to="/profile"><i className="ti-user text-muted me-2"></i> Profile</Link>
                <Link className="dropdown-item" to="/mailbox"><i className="ti-settings text-muted me-2"></i> Email</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/login"><i className="ti-lock text-muted me-2"></i> Logout</Link>
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
