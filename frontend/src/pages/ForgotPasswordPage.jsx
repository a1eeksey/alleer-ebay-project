import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react"
import { useForgotPass } from "../hooks/useForgotPass"

function ForgotPass() {
  const [email, setEmail] = useState('')
  const {forgotPass, error, isLoading} = useForgotPass()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await forgotPass(email)
  }

  return (
    <div id="main-wrapper" className="auth-customizer-none">
    <div className="h4 text-center mt-2 mb-0"><Link className="navbar-brand logo" to="/">ALLEER</Link></div>
<div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100 d-flex align-items-center justify-content-center">
<div className="d-flex align-items-center justify-content-center w-100">
<div className="row justify-content-center w-100">
<div className="col-md-8 col-lg-6 col-xl-4 auth-card">
<div className="card card_forgot-pass mb-0 pt-3">
<div className="card-head text-center">
  <h4>Forgot password?</h4>
</div>
<div className="card-body">
<div className="mb-5 d-flex align-items-center justify-content-center">
      <p className="mb-0 text-center  card-text">Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>
    </div>
  <form>
    <div className="mb-5">
      <label for="exampleInputEmail1" className="form-label">Email</label>
      <input type="email"
      onChange={(e) => setEmail(e.target.value)} 
      value={email} 
      className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
    </div>
    <button onClick={handleSubmit} disabled={isLoading} className="btn btn-primary w-100 py-8 mb-4 rounded-2">Send recovery code</button>
    {error && <div className="error">{error}</div>}
    <Link className="d-flex justify-content-center text-primary fw-medium text-decoration-none" to="/signin">Back to sign in</Link>
  </form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
  );
}

export default ForgotPass;