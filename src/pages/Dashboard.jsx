import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faShoppingBag, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faDropbox } from '@fortawesome/free-brands-svg-icons';

const Dashboard = () => {
  return (
    <div className="content-wrapper">
      <div className="container-full">
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
                <div className="box-body">
                  <div className="d-flex justify-content-between">
                    <h2 className="my-0 fw-600 text-primary">10+</h2>
                    <div className="w-40 h-40 bg-primary rounded-circle text-center fs-24 l-h-40">
                      <FontAwesomeIcon icon={faInbox} />
                    </div>
                  </div>
                  <p className="fs-18 mt-10">Total Shelfs</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
                <div className="box-body">
                  <div className="d-flex justify-content-between">
                    <h2 className="my-0 fw-600 text-warning">3432+</h2>
                    <div className="w-40 h-40 bg-warning rounded-circle text-center fs-24 l-h-40">
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </div>
                  </div>
                  <p className="fs-18 mt-10">New Order</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
                <div className="box-body">
                  <div className="d-flex justify-content-between">
                    <h2 className="my-0 fw-600 text-info">$ 532k</h2>
                    <div className="w-40 h-40 bg-info rounded-circle text-center fs-24 l-h-40">
                      <FontAwesomeIcon icon={faDollarSign} />
                    </div>
                  </div>
                  <p className="fs-18 mt-10">Total Sales</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
                <div className="box-body">
                  <div className="d-flex justify-content-between">
                    <h2 className="my-0 fw-600 text-danger">2453</h2>
                    <div className="w-40 h-40 bg-danger rounded-circle text-center fs-24 l-h-40">
                      <FontAwesomeIcon icon={faDropbox} />
                    </div>
                  </div>
                  <p className="fs-18 mt-10">Units Sold</p>
                </div>
              </div>
            </div>

            {/* Rest of the dashboard components */}
            {/* Note: The remaining components would follow the same pattern of converting class to className */}
            {/* and using proper React/JSX syntax */}

          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
