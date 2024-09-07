import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import GoogleSignin from "../components/shareable/GoogleSignin";

//icons
import cloud from "../assets/icons/cloud.svg"
import folder from "../assets/icons/folder.svg"
import server from "../assets/icons/server.svg"
import smile from "../assets/icons/smile.svg"
// import google from "../assets/icons/google.svg"
// import facebook from "../assets/icons/facebook.svg"

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(name, email, password)
  }

  return (
    <form onSubmit={handleSubmit} id="main-wrapper" className="login auth-customizer-none">
    <div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100">
      <div className="position-relative z-index-5">
        <div className="row justify-content-center">

          <div className="mt-md-5 mt-0 col-xl-6 col-xxl-6">
          <div className="h4 text-xl-start text-center"><Link className="navbar-brand logo" to="/">ALLEER</Link></div>
            <div className="mt-5 d-none d-xl-flex flex-column h-n80">
              <h2>Build your own dashboard</h2>
              <div className="column mt-5">
                    <div className="col-lg-7 mb-3 py-2">
                        <div className="d-flex flex-row align-items-center feature rounded-3 mb-3">
                            <img src={cloud} alt="" />
                            <h2 className="h6 px-2 mb-0">All-in-one tool</h2>
                        </div>
                        <p className="signup-card_p card-text">Build, run, and scale your apps - end to end.</p>
                    </div>

                    <div className="col-lg-7 mb-3 py-2">
                        <div className="d-flex flex-row align-items-center feature rounded-3 mb-3">
                            <img src={folder} alt="" />
                            <h2 className="h6 px-2 mb-0">Easily add & manage your services</h2>
                        </div>
                        <p className="signup-card_p card-text">It brings together your tasks, projects, timelines, files and more</p>
                    </div>

                    <div className="col-lg-7 mb-3 py-2">
                        <div className="d-flex flex-row align-items-center feature rounded-3 mb-3">
                            <img src={server} alt="" />
                            <h2 className="h6 px-2 mb-0">Your own company branding</h2>
                        </div>
                        <p className="signup-card_p card-text">Create your own multiple company branding</p>
                    </div>

                    <div className="col-lg-7 mb-3 py-2">
                        <div className="d-flex flex-row align-items-center feature rounded-3 mb-3">
                            <img src={smile} alt="" />
                            <h2 className="h6 px-2 mb-0">Instant Update</h2>
                        </div>
                        <p className="signup-card_p card-text">Instant access to our new products and updates during a year</p>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="mt-5 col-md-8 col-lg-6 col-xl-4 auth-card">
            <div className="card card-signup mb-0 pt-3">
              <div className="card-head text-center">
                <h4>Sign up</h4>
              </div>
              <div className="card-body">
              <div className="mb-5 d-flex align-items-center justify-content-center">
                    <p className="mb-0">Already have an account?</p>
                    <Link className="text-primary fw-medium ms-2 text-decoration-none" to="/signin">Sign in here</Link>
                  </div>
                <div>
                <div className="mb-3">
                    <label for="inputName" className="form-label">Name</label>
                    <input type="text" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name} 
                    className="form-control" id="inputName" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email</label>
                    <input type="email"
                     onChange={(e) => setEmail(e.target.value)} 
                     value={email} 
                    className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-4">
                    <label for="inputPassword" className="form-label">Password</label>
                    <input type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    className="form-control" id="inputPassword"/>
                  </div>
                  <button disabled={isLoading} className="btn btn-primary w-100 py-8 mb-4 rounded-2">Create an account</button>
                  {error && <div className="error">{error}</div>}
                  <div className="position-relative text-center mt-2 mb-4">
                    <p className="mb-0 fs-5 px-3 d-inline-block bg-body text-dark z-index-5 position-relative">or sign
                    </p>
                  </div>
                  <div className="row d-flex justify-content-center">
                  <div className="google-button text-center col-6 mb-2 mb-sm-0">
                    <GoogleSignin />
                  </div>
                  
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </form>

  );
}

export default SignUp;

/*
<div className="col-6 mb-2 mb-sm-0">
                    <Link className="btn text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8" to="/" role="button">
                      <img src={google} alt="modernize-img" className="img-fluid me-2" width="18" height="18"/>
                      <span className="flex-shrink-0 social fw-medium">with Google</span>
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link className="btn text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8" to="/" role="button">
                      <img src={facebook} alt="modernize-img" className="img-fluid me-2" width="18" height="18"/>
                      <span className="flex-shrink-0 social fw-medium">with FB</span>
                    </Link>
                  </div>
*/