import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header'
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('User-info')) {
            history.push('/add')
        }
    }, [])
    async function login()
    {
        //console.warn('data',email,password);
        let item={email,password}
        let result = await fetch('http://127.0.0.1:8000/api/login',{
            method:'POST',
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result =await result.json();
        localStorage.setItem('User-info',JSON.stringify(result));
        history.push('/add');
    }

    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Login Page</h1>
                <input type="text" placeholder="Email" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                <br />
                <input type="password" placeholder="Password" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
                <br />
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
        </>
    )
}

export default Login