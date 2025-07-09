import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDesktop, 
  faBox, 
  faTruck, 
  faChartPie,
  faAngleRight,
  faCircle
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar position-relative">
        <div className="multinav">
          <div className="multinav-scroll" style={{height: "100%"}}>
            <ul className="sidebar-menu">
              <li className="treeview">
                <Link to="#">
                  <FontAwesomeIcon icon={faDesktop} />
                  <span>Dashboard</span>
                  <span className="pull-right-container">
                    <FontAwesomeIcon icon={faAngleRight} className="pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  <li><Link to="/"><FontAwesomeIcon icon={faCircle} />Dashboard 1</Link></li>
                  <li><Link to="/dashboard2"><FontAwesomeIcon icon={faCircle} />Dashboard 2</Link></li>
                  <li><Link to="/dashboard3"><FontAwesomeIcon icon={faCircle} />Dashboard 3</Link></li>
                </ul>
              </li>

              <li className="treeview">
                <Link to="#">
                  <FontAwesomeIcon icon={faBox} />
                  <span>Features</span>
                  <span className="pull-right-container">
                    <FontAwesomeIcon icon={faAngleRight} className="pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  {/* Features submenus */}
                  <li className="treeview">
                    <Link to="#">
                      <FontAwesomeIcon icon={faCircle} />
                      Card
                      <span className="pull-right-container">
                        <FontAwesomeIcon icon={faAngleRight} className="pull-right" />
                      </span>
                    </Link>
                    <ul className="treeview-menu">
                      <li><Link to="/cards/user"><FontAwesomeIcon icon={faCircle} />User Card</Link></li>
                      <li><Link to="/cards/advanced"><FontAwesomeIcon icon={faCircle} />Advanced Card</Link></li>
                      <li><Link to="/cards/basic"><FontAwesomeIcon icon={faCircle} />Basic Card</Link></li>
                      <li><Link to="/cards/color"><FontAwesomeIcon icon={faCircle} />Card Color</Link></li>
                      <li><Link to="/cards/group"><FontAwesomeIcon icon={faCircle} />Card Group</Link></li>
                    </ul>
                  </li>
                  
                  {/* Additional feature sections would follow the same pattern */}
                </ul>
              </li>

              {/* Forms Section */}
              <li className="treeview">
                <Link to="#">
                  <FontAwesomeIcon icon={faTruck} />
                  <span>Forms</span>
                  <span className="pull-right-container">
                    <FontAwesomeIcon icon={faAngleRight} className="pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  <li><Link to="/forms/advanced"><FontAwesomeIcon icon={faCircle} />Form Elements</Link></li>
                  <li><Link to="/forms/general"><FontAwesomeIcon icon={faCircle} />Form Layout</Link></li>
                  <li><Link to="/forms/wizard"><FontAwesomeIcon icon={faCircle} />Form Wizard</Link></li>
                  {/* Additional form menu items */}
                </ul>
              </li>

              {/* Charts Section */}
              <li className="treeview">
                <Link to="#">
                  <FontAwesomeIcon icon={faChartPie} />
                  <span>Charts</span>
                  <span className="pull-right-container">
                    <FontAwesomeIcon icon={faAngleRight} className="pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  <li><Link to="/charts/chartjs"><FontAwesomeIcon icon={faCircle} />ChartJS</Link></li>
                  <li><Link to="/charts/flot"><FontAwesomeIcon icon={faCircle} />Flot</Link></li>
                  {/* Additional chart menu items */}
                </ul>
              </li>

              {/* Footer Widget */}
              <div className="sidebar-widgets">
                <div className="copyright text-center m-25 text-white-50">
                  <p>
                    <strong className="d-block">Deposito Admin Dashboard</strong> 
                    © {new Date().getFullYear()} All Rights Reserved
                  </p>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
