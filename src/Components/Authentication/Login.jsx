import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const host = "http://localhost:8000";

const Login = () => {
    const [login, setlogin] = useState({ email: "", password: "" })
    let navigate = useNavigate();


    const onchange = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value })
    }


    const HandleSubmit = async (e) => {
        e.preventDefault();

        //API CALL(backend)
        const url = `${host}/api/auth/login`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: login.email, password: login.password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem("token", json.authToken);
            navigate('/');
        }
        else {
            if (json.error) {
                alert(`Login failed: ${json.error}`);
            } else {
                alert("Login failed. Please try again.");
            }
        }
    }

    return (
        <div className='container'>
            <h1 className='text-center text-bg-secondary p-4'>Login </h1>

            <form onSubmit={HandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onchange} value={login.email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onchange} value={login.password} />
                </div>

                <button className="btn btn-primary" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
