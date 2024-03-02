import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const host = "http://localhost:8000";

const Signin = ({ showAlert }) => {
  const [signup, setsignup] = useState({ name: "", email: "", password: "",Cpassword:"" });
  let navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    //API CALL(backend)
    const url = `${host}/api/auth/createuser`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: signup.name, email: signup.email, password: signup.password })
    });
    const json = await response.json();
    // console.log(json)
    if (signup.password !== signup.Cpassword) {
      showAlert("Incorrect confirm password", "danger")
    }
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate('/');
      showAlert("Sign up successfull", "success")
    }
    else {
      showAlert("Invalid details", "danger")
    }
  }



  const onchange = (e) => {
    setsignup({ ...signup, [e.target.name]: e.target.value })
  }

  return (
    <div className='container'>
      <h1 className='text-center text-bg-secondary p-4'>Sign up </h1>
      <form onSubmit={HandleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name : </label>
          <input type="text" className="form-control" id="name" name='name' value={signup.name} onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email :</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' value={signup.email} onChange={onchange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' value={signup.password} onChange={onchange} required minLength={6} />
        </div>
        <div className="mb-3">
          <label htmlFor="Cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="Cpassword" name='Cpassword' value={signup.Cpassword} onChange={onchange} required minLength={6} />
        </div>
        <button type="submit" className="btn btn-primary">Sign up</button>
      </form>
    </div>
  )
}

export default Signin
