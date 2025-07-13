import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openDialog } from '../redux/slices/dialogSlice';
import Swal from 'sweetalert2';
import feather from "feather-icons";
import { deleteEmployee } from '../redux/employees';
import { getCustomers } from '../redux/customer';

const customerData = [
  {
    id: 1,
    name: "Jonas Alexander",
    position: "Developer",
    office: "San Francisco",
    age: 30,
    startDate: "2010/07/14",
    salary: "$86,500"
  },
  {
    id: 2,
    name: "Shad Decker",
    position: "Regional Director", 
    office: "Edinburgh",
    age: 51,
    startDate: "2008/11/13",
    salary: "$183,000"
  },
  {
    id: 3,
    name: "Michael Bruce",
    position: "Javascript Developer",
    office: "Singapore", 
    age: 29,
    startDate: "2011/06/27",
    salary: "$183,000"
  },
  {
    id: 4,
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    age: 27,
    startDate: "2011/01/25",
    salary: "$112,000"
  }
];

const Customer = () => {
       const {customer} = useSelector(state => state.customer);
    useEffect(() => {
    feather.replace();
  }, []);
 const dispatch = useDispatch();
     useEffect(() => {
    
       dispatch(getCustomers())
         .then(response => {
           console.log(response);
           if (response) {
             // Handle the response, e.g., update the state with the fetched data
           }
         })
         .catch(error => {
           console.error('Error fetching employees:', error);
         });
     }, [dispatch]);
 

  const handleAddCustomer = () => {
    dispatch(openDialog(null)); // Pass null for adding a new customer
  };

  const handleEditCustomer = (customer) => {
    dispatch(openDialog(customer)); // Pass customer data for editing
  };

  const handleDeleteCustomer = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {

    const response = dispatch(deleteEmployee(id)) 
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  return (
    <>
      <div className="content-header">
        <div className="d-flex align-items-center">
          <div className="me-auto">
            <h4 className="page-title">Customer Tables</h4>
            {/* <div className="d-inline-block align-items-center">
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">
                    
                      <i data-feather="user"></i>
                    </Link>
                  </li>
                
                  <li className="breadcrumb-item active" aria-current="page">
                    Customer Tables
                  </li>
                </ol>
              </nav>
            </div> */}
          </div>
        </div>
      </div>
      <section className="content" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col-12">
            <div className="box">
              <div className="box-header d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary mt-10"
                  onClick={handleAddCustomer}
                >
                  Add Customer
                </button>
              </div>
              <div className="box-body">
                <div className="table-responsive">
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerData.map((customer) => (
                        <tr key={customer.id}>
                          <td>{customer.name}</td>
                          <td>{customer.position}</td>
                          <td>{customer.office}</td>
                          <td>{customer.age}</td>
                          <td>{customer.startDate}</td>
                          <td>{customer.salary}</td>
                          <td>
                            <div className="d-flex justify-content-center align-items-center">
                              <button
                                className="btn btn-outline-info btn-sm"
                                onClick={() => handleEditCustomer(customer)}
                              >
                             <i data-feather="edit" className="w-3 h-3"></i>
                              </button>
                              <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={handleDeleteCustomer}
                              >
                                <i
                                  data-feather="trash-2"
                                  className="w-3 h-3"
                                ></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customer;
