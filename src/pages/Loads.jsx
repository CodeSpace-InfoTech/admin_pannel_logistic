import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openDialog } from '../redux/slices/dialogSlice';
import Swal from 'sweetalert2';
import feather from "feather-icons";
import { deleteLoad } from '../redux/loads';
import { getLoads } from '../redux/loads';

const loadData = [
  {
    id: 1,
    loadNumber: "L001",
    origin: "Chicago, IL",
    destination: "New York, NY",
    pickupDate: "2024/03/20",
    deliveryDate: "2024/03/22",
    status: "In Transit",
    rate: "$3,500"
  },
  {
    id: 2,
    loadNumber: "L002",
    origin: "Los Angeles, CA",
    destination: "Dallas, TX", 
    pickupDate: "2024/03/21",
    deliveryDate: "2024/03/23",
    status: "Pending",
    rate: "$4,200"
  },
  {
    id: 3,
    loadNumber: "L003",
    origin: "Miami, FL",
    destination: "Atlanta, GA",
    pickupDate: "2024/03/22",
    deliveryDate: "2024/03/23",
    status: "Delivered",
    rate: "$2,800"
  },
  {
    id: 4,
    loadNumber: "L004",
    origin: "Seattle, WA",
    destination: "Portland, OR",
    pickupDate: "2024/03/23",
    deliveryDate: "2024/03/24",
    status: "Assigned",
    rate: "$1,900"
  }
];

const Loads = () => {
  const {loads} = useSelector(state => state.loads);
  useEffect(() => {
    feather.replace();
  }, []);
  
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getLoads())
  //     .then(response => {
  //       console.log(response);
  //       if (response) {
  //         // Handle the response, e.g., update the state with the fetched data
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching loads:', error);
  //     });
  // }, [dispatch]);

  const handleAddLoad = () => {
    dispatch(openDialog(null)); // Pass null for adding a new load
  };

  const handleEditLoad = (load) => {
    dispatch(openDialog(load)); // Pass load data for editing
  };

  const handleDeleteLoad = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      const response = dispatch(deleteLoad(id))
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Load has been deleted.', 'success');
      }
    });
  };

  return (
    <>
      <div className="content-header">
        <div className="d-flex align-items-center">
          <div className="me-auto">
            <h4 className="page-title">Loads Management</h4>
          </div>
        </div>
      </div>
      <section className="content" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col-12">
            <div className="box">
              {/* <div className="box-header d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary mt-10"
                  onClick={handleAddLoad}
                >
                  Add Load
                </button>
              </div> */}
              <div className="box-body">
                <div className="table-responsive">
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Load Number</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Pickup Date</th>
                        <th>Delivery Date</th>
                        <th>Status</th>
                        <th>Rate</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {loadData.map((load) => (
                        <tr key={load.id}>
                          <td>{load.loadNumber}</td>
                          <td>{load.origin}</td>
                          <td>{load.destination}</td>
                          <td>{load.pickupDate}</td>
                          <td>{load.deliveryDate}</td>
                          <td>
                            <span className={`badge ${
                              load.status === 'Delivered' ? 'bg-success' :
                              load.status === 'In Transit' ? 'bg-primary' :
                              load.status === 'Pending' ? 'bg-warning' :
                              'bg-info'
                            }`}>
                              {load.status}
                            </span>
                          </td>
                          <td>{load.rate}</td>
                          {/* <td>
                            <div className="d-flex justify-content-center align-items-center">
                              <button
                                className="btn btn-outline-info btn-sm me-2"
                                onClick={() => handleEditLoad(load)}
                              >
                                <i data-feather="edit" className="w-3 h-3"></i>
                              </button>
                              <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => handleDeleteLoad(load.id)}
                              >
                                <i data-feather="trash-2" className="w-3 h-3"></i>
                              </button>
                            </div>
                          </td> */}
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

export default Loads;
