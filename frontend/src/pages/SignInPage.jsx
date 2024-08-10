import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import GoogleSignin from "../components/shareable/GoogleSignin"

// icons
// import google from "../../src/assets/icons/google.svg"
// import facebook from "../../src/assets/icons/facebook.svg"

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

    return (
      <form id="main-wrapper" className="login auth-customizer-none">
      <div className="h4 text-center mt-2 mb-0"><Link className="navbar-brand logo" to="/">ALLEER</Link></div>
    <div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xl-4 auth-card">
            <div className="card mb-0 pt-3">
              <div className="card-head text-center">
                <h4>Sign in</h4>
              </div>
              <div className="card-body">
              <div className="mb-5 d-flex align-items-center justify-content-center">
                    <p className="mb-0">Don't have an account yet?</p>
                    <Link className="text-primary fw-medium ms-2 text-decoration-none" to="/signup">Create an
                      account</Link>
                  </div>
                <div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-4">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    className="form-control" id="inputPassword"/>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <Link className="text-primary fw-medium text-decoration-none" to="/forgot-pass">Forgot
                      Password ?</Link>
                  </div>
                  <button onClick={handleSubmit} disabled={isLoading} className="btn btn-primary w-100 py-8 mb-4 rounded-2">Sign In</button>
                  {error && <div className="error">{error}</div>}
                  <div className="position-relative text-center mt-2 mb-4">
                    <p className="mb-0 fs-5 px-3 d-inline-block bg-body text-dark z-index-5 position-relative">or sign in
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
    )
}

export default SignIn;


// Facebook button

/* 
                  <div className="col-6">
                    <Link className="btn text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8" to="/" role="button">
                      <img src={facebook} alt="modernize-img" className="img-fluid me-2" width="18" height="18"/>
                      <span className="flex-shrink-0 social fw-medium">with FB</span>
                    </Link>
                  </div>
*/