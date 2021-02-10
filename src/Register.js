import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header'

function Register()
 {
     useEffect(()=>{
         if(localStorage.getItem('User-info')){
             history.push('/add')
         }
     })
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();

    async function signUp() {
        let item = { name, password, email }

        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        //console.warn("result", result)
        localStorage.setItem("User-info", JSON.stringify(result));
        history.push("/add");
    }
    return (
        <>
         <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>User Sign Up</h1>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
            <br />
            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
            <br />
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
            <br />
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
        </>
    )
}

export default Register