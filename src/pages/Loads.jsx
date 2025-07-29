import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery';


import feather from "feather-icons";

import { getLoads } from '../redux/loads';
import TableHeader from '../Components/TableHeader';
import { TablePagination } from '@mui/material';
import dayjs from 'dayjs';



const Loads = () => {
  const {loads, totalLoads} = useSelector(state => state.loads);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  useEffect(() => {
    feather.replace();
  }, [loads]);
  useEffect(() => {
    feather.replace();
    
    // Add click event listener to document to close dropdown when clicking outside
    $(document).on('click', (e) => {
      if (!$(e.target).closest('.dropdown').length) {
        setIsDropdownOpen(false);
      }
    });

    // Cleanup listener on component unmount
    return () => {
      $(document).off('click');
    };
  }, [loads]);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoads({
      page: page + 1,
      limit: rowsPerPage,
      sortBy,
      sortOrder,
      search,
      status
    }))
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching loads:', error);
      });
  }, [dispatch, page, rowsPerPage, sortBy, sortOrder, search, status]);
  const navigate = useNavigate();

 


  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleStatusSelect = (status) => {
    setStatus(status);
    setIsDropdownOpen(false);
  };



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleViewLoad = (load) => {
    sessionStorage.setItem("loadId", load._id);
    navigate("load-details");
  }

  return (
    <>
      <TableHeader title="Loads Tables" />
      <section className="content" >  <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
                   <button 
                     className={`btn btn-rounded btn-primary dropdown-toggle ${isDropdownOpen ? 'show' : ''}`} 
                     type="button" 
                     onClick={toggleDropdown}
                   >
                     {status ? status : 'Status'}
                   </button>
                   <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                     <Link className="dropdown-item" onClick={() => handleStatusSelect("")}>
                       All
                     </Link>
                     <Link className="dropdown-item" onClick={() => handleStatusSelect("pending")}>
                      Pending
                     </Link>
                     <Link className="dropdown-item" onClick={() => handleStatusSelect("cancelled")}>
                     Cancelled
                     </Link>
                     <Link className="dropdown-item" onClick={() => handleStatusSelect("completed")}>
                    Completed
                     </Link>
                     <Link className="dropdown-item" onClick={() => handleStatusSelect("delivered")}>
                      Delivered
                     </Link>
                     <Link className="dropdown-item" onClick={() => handleStatusSelect("assigned")}>
                       Assign
                     </Link>
                   </div>
                </div>
        <div className="row">
          <div className="col-12">
            <div className="box">
              <div className="box-header align-items-center d-flex justify-content-between">
                <div>
              
                </div>
                <div>
              
                </div>
              </div>
              <div className="box-body">
                <div className="table-responsive">
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Load Number</th>
                        <th>Customer</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Pickup Date/Time</th>
                        <th>Delivery Date/Time</th>
                        <th>Status</th>
                        <th>Rate</th>
                        <th>Equipment</th>
                        
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loads.length > 0 && loads.map((load ,ind) => (
                        <tr key={load._id}>
                          <td>{(page * rowsPerPage) + (ind + 1)}</td>
                          <td>{load.loadNumber}</td>
                          <td>{load.customerData?.name}</td>
                          <td>{`${load.pickup?.location?.city}, ${load.pickup?.location?.state}`}</td>
                          <td>{`${load.delivery?.location?.city}, ${load.delivery?.location?.state}`}</td>
                          <td>
                            {dayjs(load.pickup?.date).format('MMM D, YYYY')}
                            <br />
                            {`${dayjs(load.pickup?.timeWindow?.start).format('h:mm A')} - ${dayjs(load.pickup?.timeWindow?.end).format('h:mm A')}`}
                          </td>
                          <td>
                            {dayjs(load.delivery?.date).format('MMM D, YYYY')}
                            <br />
                            {`${dayjs(load.delivery?.timeWindow?.start).format('h:mm A')} - ${dayjs(load.delivery?.timeWindow?.end).format('h:mm A')}`}
                          </td>
                          <td>
                            <span className={`badge ${
                              load.status === 'delivered' ? 'bg-success' :
                              load.status === 'in_transit' ? 'bg-primary' :
                              load.status === 'pending' ? 'bg-warning' :
                              'bg-info'
                            }`}>
                              {load.status?.charAt(0).toUpperCase() + load.status?.slice(1)}
                            </span>
                          </td>
                          <td>${load.price?.amount}</td>
                          <td>{load.equipment?.toUpperCase()}</td>
                      
                          
                          <td>
                            <button
                              className="btn btn-outline-primary btn-sm"
                              onClick={() => handleViewLoad(load)}
                            >
                              <i data-feather="eye" className="w-3 h-3"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <TablePagination
                component="div"
                count={totalLoads}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 25, 50]}
              />
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Loads;
