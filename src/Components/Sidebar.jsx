import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import feather from 'feather-icons';

const Sidebar = () => {
    const location = useLocation();
    
    useEffect(() => {
        feather.replace();
    }, []);

    // Function to check if a link is active
    const isActive = (path) => {
        return location.pathname === path;
    };
  
    return (
        <aside className="main-sidebar">
            {/* sidebar */}
            <section className="sidebar position-relative">
                <div className="multinav">
                    <div className="multinav-scroll" style={{height: '100%'}}>
                        {/* sidebar menu */}
                        <ul className="sidebar-menu tree" data-widget="tree">
                            <li className={`treeview ${isActive('/') ? 'active' : ''}`}>
                                <Link to="/">
                                    <i data-feather="monitor"></i>
                                    <span>Dashboard</span>
                                </Link>
                            </li>

                            {/* <li className={`treeview ${location.pathname.includes('/forms') ? 'active' : ''}`}>
                                <Link to="#">
                                    <i data-feather="truck"></i>
                                    <span>Forms</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li className={isActive('/forms/elements') ? 'active' : ''}><Link to="/forms/elements"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Elements</Link></li>
                                    <li className={isActive('/forms/layout') ? 'active' : ''}><Link to="/forms/layout"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Layout</Link></li>
                                    <li className={isActive('/forms/wizard') ? 'active' : ''}><Link to="/forms/wizard"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Wizard</Link></li>
                                    <li className={isActive('/forms/validation') ? 'active' : ''}><Link to="/forms/validation"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Validation</Link></li>
                                    <li className={isActive('/forms/formatter') ? 'active' : ''}><Link to="/forms/formatter"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Formatter</Link></li>
                                    <li className={isActive('/forms/xeditable') ? 'active' : ''}><Link to="/forms/xeditable"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Xeditable Editor</Link></li>
                                    <li className={isActive('/forms/dropzone') ? 'active' : ''}><Link to="/forms/dropzone"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dropzone</Link></li>
                                    <li className={isActive('/forms/code-editor') ? 'active' : ''}><Link to="/forms/code-editor"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Code Editor</Link></li>
                                    <li className={isActive('/forms/editor') ? 'active' : ''}><Link to="/forms/editor"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Editor</Link></li>
                                    <li className={isActive('/forms/markdown') ? 'active' : ''}><Link to="/forms/markdown"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Markdown</Link></li>
                                </ul>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </section>
        </aside>
    );
};

export default Sidebar;
