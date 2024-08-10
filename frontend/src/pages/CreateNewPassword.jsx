import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react"
import { useParams } from 'react-router-dom';
import { useResetPass } from "../hooks/useResetPass"

function CreateNewPass() {
  const { userId, token } = useParams();
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const {resetPass, error, setError, isLoading} = useResetPass()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {      
      setError("passwords dont match")
      return
    }

    await resetPass(password, userId, token);
  }


  return (
    <div id="main-wrapper" className="auth-customizer-none">
    <div className="h4 text-center mt-2 mb-0"><Link className="navbar-brand logo" to="/">ALLEER</Link></div>
<div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100 d-flex align-items-center justify-content-center">
<div className="d-flex align-items-center justify-content-center w-100">
<div className="row justify-content-center w-100">
<div className="col-md-8 col-lg-6 col-xl-4 auth-card">
<div className="card mb-0 pt-3">
<div className="card-head text-center">
  <h4>Create new password</h4>
</div>
<div className="card-body">
<div className="mb-5 d-flex align-items-center justify-content-center">
      <p className="mb-0 text-center  card-text">Please, create your new password, don't use your old one.</p>
    </div>
  <form>
    <div className="mb-5">
      <label for="inputPass" className="form-label">New password</label>
      <input type="password"
      onChange={(e) => setPassword(e.target.value)} 
      value={password}
      className="form-control" id="inputPass1" aria-describedby="passHelp"/>
    </div>
    <div className="mb-5">
      <label for="inputPass" className="form-label">Confirm new password</label>
      <input type="password"
      onChange={(e) => setConfirmPassword(e.target.value)} 
      value={confirmPassword}
      className="form-control" id="inputPass2" aria-describedby="passHelp"/>
    </div>
    <button onClick={handleSubmit} disabled={isLoading} className="btn btn-primary w-100 py-8 mb-4 rounded-2">Reset and save my password</button>
    {error && <div className="error">{error}</div>}
    <Link to="/signin" className="d-flex justify-content-center text-primary fw-medium text-decoration-none">Back to sign in</Link>
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

export default CreateNewPass;