import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import feather from 'feather-icons';
const Sidebar = () => {
    useEffect(() => {
    feather.replace(); 
  }, []);
  return (
    
<aside className="main-sidebar">
    {/* sidebar */}
    <section className="sidebar position-relative">
        <div className="multinav">
            <div className="multinav-scroll" style={{height: '100%'}}>
                {/* sidebar menu */}
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="treeview">
                        <Link to="#">
                            <i data-feather="monitor"></i>
                            <span>Dashboard</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            <li><Link to="/"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 1</Link></li>
                            <li><Link to="/dashboard2"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 2</Link></li>
                            <li><Link to="/dashboard3"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 3</Link></li>
                        </ul>
                    </li>

                    {/* Features Section */}
                    <li className="treeview">
                        <Link to="#">
                            <i data-feather="package"></i>
                            <span>Features</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            {/* Card Submenu */}
                            <li className="treeview">
                                <Link to="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Card
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="/cards/user"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>User Card</Link></li>
                                    <li><Link to="/cards/advanced"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Advanced Card</Link></li>
                                    <li><Link to="/cards/basic"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Basic Card</Link></li>
                                    <li><Link to="/cards/color"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Card Color</Link></li>
                                    <li><Link to="/cards/group"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Card Group</Link></li>
                                </ul>
                            </li>

                            {/* BS UI Submenu */}
                            <li className="treeview">
                                <Link to="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>BS UI
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="/ui/grid"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Grid System</Link></li>
                                    <li><Link to="/ui/badges"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Badges</Link></li>
                                    <li><Link to="/ui/border"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Border</Link></li>
                                    <li><Link to="/ui/buttons"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Buttons</Link></li>
                                    <li><Link to="/ui/color"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Color</Link></li>
                                    <li><Link to="/ui/dropdown"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dropdown</Link></li>
                                    <li><Link to="/ui/dropdown-grid"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dropdown Grid</Link></li>
                                    <li><Link to="/ui/progress"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Progress Bars</Link></li>
                                </ul>
                            </li>

                            {/* Icons Submenu */}
                            <li className="treeview">
                                <Link to="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Icons
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="/icons/fontawesome"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Font Awesome</Link></li>
                                    <li><Link to="/icons/glyphicons"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Glyphicons</Link></li>
                                    <li><Link to="/icons/material"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Material Icons</Link></li>
                                    <li><Link to="/icons/themify"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Themify Icons</Link></li>
                                    <li><Link to="/icons/simpleline"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Simple Line Icons</Link></li>
                                    <li><Link to="/icons/cryptocoins"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Cryptocoins Icons</Link></li>
                                    <li><Link to="/icons/flag"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Flag Icons</Link></li>
                                    <li><Link to="/icons/weather"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Weather Icons</Link></li>
                                </ul>
                            </li>

                            {/* Custom UI Submenu */}
                            <li className="treeview">
                                <Link to="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Custom UI
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="/ui/ribbons"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Ribbons</Link></li>
                                    <li><Link to="/ui/sliders"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Sliders</Link></li>
                                    <li><Link to="/ui/typography"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Typography</Link></li>
                                    <li><Link to="/ui/tabs"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Tabs</Link></li>
                                    <li><Link to="/ui/timeline"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Timeline</Link></li>
                                    <li><Link to="/ui/timeline-horizontal"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Horizontal Timeline</Link></li>
                                </ul>
                            </li>

                            {/* Components Submenu */}
                            <li className="treeview">
                                <Link to="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Components
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="/components/switch"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Bootstrap Switch</Link></li>
                                    <li><Link to="/components/paginator"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Date Paginator</Link></li>
                                    <li><Link to="/components/media"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Advanced Medias</Link></li>
                                    <li><Link to="/components/rangeslider"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Range Slider</Link></li>
                                    <li><Link to="/components/rating"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Ratings</Link></li>
                                    <li><Link to="/components/animations"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Animations</Link></li>
                                    <li><Link to="/components/fullscreen"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Fullscreen</Link></li>
                                    <li><Link to="/components/pace"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Pace</Link></li>
                                    <li><Link to="/components/nestable"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Nestable</Link></li>
                                    <li><Link to="/components/portlet"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Draggable Portlets</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    {/* Forms Section */}
                    <li className="treeview">
                        <Link to="#">
                            <i data-feather="truck"></i>
                            <span>Forms</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            <li><Link to="/forms/elements"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Elements</Link></li>
                            <li><Link to="/forms/layout"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Layout</Link></li>
                            <li><Link to="/forms/wizard"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Wizard</Link></li>
                            <li><Link to="/forms/validation"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Validation</Link></li>
                            <li><Link to="/forms/formatter"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Formatter</Link></li>
                            <li><Link to="/forms/xeditable"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Xeditable Editor</Link></li>
                            <li><Link to="/forms/dropzone"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dropzone</Link></li>
                            <li><Link to="/forms/code-editor"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Code Editor</Link></li>
                            <li><Link to="/forms/editor"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Editor</Link></li>
                            <li><Link to="/forms/markdown"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Markdown</Link></li>
                        </ul>
                    </li>

                    {/* Charts Section */}
                    <li className="treeview">
                        <Link to="#">
                            <i data-feather="pie-chart"></i>
                            <span>Charts</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            <li><Link to="/charts/chartjs"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>ChartJS</Link></li>
                            <li><Link to="/charts/flot"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Flot</Link></li>
                            <li><Link to="/charts/inline"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Inline charts</Link></li>
                            <li><Link to="/charts/morris"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Morris</Link></li>
                            <li><Link to="/charts/peity"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Peity</Link></li>
                            <li><Link to="/charts/chartist"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Chartist</Link></li>
                            <li><Link to="/charts/c3-axis"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Axis Chart</Link></li>
                            <li><Link to="/charts/c3-bar"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Bar Chart</Link></li>
                            <li><Link to="/charts/c3-data"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Data Chart</Link></li>
                            <li><Link to="/charts/c3-line"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Line Chart</Link></li>
                            <li><Link to="/charts/echarts-basic"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Basic Charts</Link></li>
                            <li><Link to="/charts/echarts-bar"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Bar Chart</Link></li>
                            <li><Link to="/charts/echarts-pie"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Pie & Doughnut Chart</Link></li>
                        </ul>
                    </li>

                    {/* Tables Section */}
                    <li className="treeview">
                        <Link to="#">
                            <i data-feather="trello"></i>
                            <span>Tables</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            <li><Link to="/tables/simple"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Simple tables</Link></li>
                            <li><Link to="/tables/data"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Data tables</Link></li>
                            <li><Link to="/tables/editable"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Editable Tables</Link></li>
                            <li><Link to="/tables/color"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Table Color</Link></li>
                        </ul>
                    </li>

                    {/* Widgets Section */}
                    <li className="treeview">
                        <Link to="#">
                            <i data-feather="server"></i>
                            <span>Widgets</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            {/* Custom Widgets */}
                            <li className="treeview">
                                <Link to="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Custom
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="/widgets/blog"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Blog</Link></li>
                                    <li><Link to="/widgets/chart"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Chart</Link></li>
                                    <li><Link to="/widgets/list"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>List</Link></li>
                                    <li><Link to="/widgets/social"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Social</Link></li>
                                    <li><Link to="/widgets/statistic"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Statistic</Link></li>
                                    <li><Link to="/widgets/weather"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Weather</Link></li>
                                    <li><Link to="/widgets"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Widgets</Link></li>
                                    <li><Link to="/email"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Emails</Link></li>
                                </ul>
                            </li>

                            {/* Maps */}
                            <li className="treeview">
                                <Link to="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Maps
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="/maps/google"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Google Map</Link></li>
                                    <li><Link to="/maps/vector"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Vector Map</Link></li>
                                </ul>
                            </li>

                            {/* Modals */}
                            <li className="treeview">
                                <Link to="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Modals
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="/modals/basic"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Modals</Link></li>
                                    <li><Link to="/modals/sweet-alert"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Sweet Alert</Link></li>
                                    <li><Link to="/modals/notification"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Toastr</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    {/* Apps Section */}
                    <li className="treeview">
                        <Link to="#">
                            <i data-feather="grid"></i>
                            <span>Apps</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            {/* Apps Submenu */}
                            <li className="treeview">
                                <Link to="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Apps
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="/apps/calendar"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Calendar</Link></li>
                                    <li><Link to="/apps/contacts"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Contact List</Link></li>
                                    <li><Link to="/apps/chat"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Chat</Link></li>
                                    <li><Link to="/apps/todo"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Todo</Link></li>
                                    <li><Link to="/apps/mailbox"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Mailbox</Link></li>
                                </ul>
                            </li>

                            {/* Ecommerce Submenu */}
                            <li className="treeview">
                                <Link to="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Ecommerce
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="/ecommerce/products"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Products</Link></li>
                                    <li><Link to="/ecommerce/cart"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Products Cart</Link></li>
                                    <li><Link to="/ecommerce/products/edit"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Products Edit</Link></li>
                                    <li><Link to="/ecommerce/details"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Product Details</Link></li>
                                    <li><Link to="/ecommerce/orders"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Product Orders</Link></li>
                                    <li><Link to="/ecommerce/checkout"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Products Checkout</Link></li>
                                </ul>
                            </li>

                            {/* Sample Pages Submenu */}
                            <li className="treeview">
                                <Link to="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Sample Pages
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li><Link to="/pages/invoice"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Invoice</Link></li>
                                    <li><Link to="/pages/invoice-list"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Invoice List</Link></li>
                                    <li><Link to="/pages/support-ticket"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Support Ticket</Link></li>
                                    <li><Link to="/pages/profile"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>User Profile</Link></li>
                                    <li><Link to="/pages/userlist-grid"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Userlist Grid</Link></li>
                                    <li><Link to="/pages/userlist"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Userlist</Link></li>
                                    <li><Link to="/pages/faq"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>FAQs</Link></li>
                                    <li><Link to="/pages/blank"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Blank</Link></li>
                                    <li><Link to="/pages/coming-soon"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Coming Soon</Link></li>
                                    <li><Link to="/pages/custom-scroll"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Custom Scrolls</Link></li>
                                    <li><Link to="/pages/gallery"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Gallery</Link></li>
                                    <li><Link to="/pages/lightbox"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Lightbox Popup</Link></li>
                                    <li><Link to="/pages/pricing"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Pricing</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    {/* Authentication Section */}
                    <li className="treeview">
                        <Link to="#">
                            <i data-feather="lock"></i>
                            <span>Authentication</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            <li><Link to="/auth/login"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Login</Link></li>
                            <li><Link to="/auth/register"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Register</Link></li>
                            <li><Link to="/auth/lockscreen"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Lockscreen</Link></li>
                            <li><Link to="/auth/recover-password"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Recover password</Link></li>
                        </ul>
                    </li>

                    {/* Miscellaneous Section */}
                    <li className="treeview">
                        <Link to="#">
                            <i data-feather="alert-triangle"></i>
                            <span>Miscellaneous</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            <li><Link to="/error/404"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Error 404</Link></li>
                            <li><Link to="/error/500"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Error 500</Link></li>
                            <li><Link to="/error/maintenance"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Maintenance</Link></li>
                        </ul>
                    </li>
                </ul>

                <div className="sidebar-widgets">
                    <div className="copyright text-center m-25 text-white-50">
                        <p><strong className="d-block">Deposito Admin Dashboard</strong> © {new Date().getFullYear()} All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</aside>
  );
};

export default Sidebar;
