// src/pages/Auth/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
 <div
      className="hold-transition theme-primary bg-img h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('../images/auth-bg/bg-1.jpg')" }}
    >
      <div className="container h-full">
        <div className="flex items-center justify-center h-full">
          <div className="w-full max-w-lg">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-5 pb-0">
                <h2 className="text-primary text-2xl font-semibold">Let's Get Started</h2>
                <p className="mb-0">Sign in to continue to Deposito.</p>
              </div>
              <div className="p-10">
                <form action="https://warehouse-admin-dashboard.multipurposethemes.com/main/index.html" method="post">
                  <div className="mb-4">
                    <div className="flex items-center mb-3 border-b border-gray-300">
                      <span className="text-gray-400 pr-3"><i className="ti-user"></i></span>
                      <input
                        type="text"
                        className="flex-grow bg-transparent outline-none py-2"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-3 border-b border-gray-300">
                      <span className="text-gray-400 pr-3"><i className="ti-lock"></i></span>
                      <input
                        type="password"
                        className="flex-grow bg-transparent outline-none py-2"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="basic_checkbox_1"
                        className="mr-2"
                      />
                      <label htmlFor="basic_checkbox_1">Remember Me</label>
                    </div>
                    <div>
                      <Link to="/forgot-password" className="text-yellow-500 hover:underline">
                        <i className="ion ion-locked"></i> Forgot pwd?
                      </Link>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-2"
                    >
                      SIGN IN
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <p>
                    Don't have an account?{' '}
                    <Link to="/register" className="text-yellow-500 ml-4">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <p className="text-white mb-5">- Sign With -</p>
              <div className="flex justify-center gap-4">
                {/* External links (keep as <a>) */}
                <a
                  className="btn btn-social-icon btn-round btn-facebook"
                  href="#"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-round btn-twitter"
                  href="#"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-round btn-instagram"
                  href="#"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
