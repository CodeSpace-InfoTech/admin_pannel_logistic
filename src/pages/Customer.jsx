import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openDialog } from '../redux/slices/dialogSlice';
import Swal from 'sweetalert2';
import feather from "feather-icons";
import { deleteEmployee } from '../redux/employees';
import { deleteCustomer, getCustomers } from '../redux/customer';
import CustomerDialog from '../Components/Dialog/CustomerDialog';



const Customer = () => {
       const {customers} = useSelector(state => state.customer);
       console.log('customer', customers)
    useEffect(() => {
    feather.replace();
  }, [customers]);
 const dispatch = useDispatch();
     useEffect(() => {
    
       dispatch(getCustomers())
         .then(response => {
           console.log("response" ,response);
           if (response) {
             // Handle the response, e.g., update the state with the fetched data
           }
         })
         .catch(error => {
           console.error('Error fetching employees:', error);
         });
     }, [dispatch]);
 

  const handleAddCustomer = () => {
    dispatch(openDialog({ type: '', data: null })); 
  };

  const handleEditCustomer = (customer) => {
       dispatch(openDialog({ type: 'edit', data: customer })); 
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

    const response = dispatch(deleteCustomer(id)) 
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
                        <th>Email</th>
                        <th>company</th>
                        <th>phone</th>
                        <th>status</th>
                      
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers && customers.map((customer) => (
                        <tr key={customer._id}>
                          <td>{customer.name}</td>
                          <td>{customer.email}</td>
                          <td>{customer.company}</td>
                          <td>{customer.phone}</td>
                          <td>
                            <span className={`badge ${customer.status === 'active' ? 'badge-success' : 'badge-danger'}`}>
                              {customer.status}
                            </span>
                          </td>
                          
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
                                onClick={() => handleDeleteCustomer(customer._id)}
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
        <CustomerDialog />
      </section>
    </>
  );
};

export default Customer;
