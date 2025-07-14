import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openDialog } from '../redux/slices/dialogSlice';
import Swal from 'sweetalert2';
import EmployeeDialog from '../Components/Dialog/EmployeeDialog';
import { deleteEmployee, getEmployees } from '../redux/employees';
import feather from "feather-icons";

const Employees = () => {
      const {employees} = useSelector(state => state.employees);
 

    // Re-initialize feather icons when employees data changes
    useEffect(() => {
      feather.replace();
    }, [employees]);

    const dispatch = useDispatch();

  
 

    useEffect(() => {
      dispatch(getEmployees())
        .then(response => {
          console.log(response);
          if (response) {
            // Handle the response, e.g., update the state with the fetched data
            feather.replace(); // Re-initialize icons after data loads
          }
        })
        .catch(error => {
          console.error('Error fetching employees:', error);
        });
    }, [dispatch]);

    const handleAddEmployee= () => {
      dispatch(openDialog({ type: '', data: null })); 
    };

    const handleEditEmployee= (employee) => {
      dispatch(openDialog({ type: 'edit', data: employee })); 
    };

    const handleDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        const response = dispatch(deleteEmployee(id)).then((res) => {
          console.log(res)
          feather.replace(); // Re-initialize icons after delete
        }).catch((error) => {
          console.log('error', error)
        })
        console.log('response', response)
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
              <h4 className="page-title">Employee Tables</h4>
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
                    onClick={handleAddEmployee}
                  >
                    Add Employee
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
                          <th>Phone</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {employees.map((employee) => (
                          <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.phone}</td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <button
                                  className="btn btn-outline-info btn-sm me-2"
                                  onClick={() => handleEditEmployee(employee)}
                                >
                                  <i data-feather="edit" className="w-4 h-4"></i>
                                </button>
                                <button
                                  className="btn btn-outline-danger btn-sm"
                                  onClick={() => handleDelete(employee._id)}
                                >
                                  <i data-feather="trash-2" className="w-4 h-4"></i>
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
          <EmployeeDialog />
        </section>
      </>
    )
}

export default Employees