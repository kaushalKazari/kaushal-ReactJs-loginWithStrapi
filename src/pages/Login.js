import React, { useState } from 'react'

export default function Login() {
    // state
    // const [stateVariableName, setFunction] = useState(initialValue)
    // 1. state variables
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassword] = useState();


    // 2. function definitions
    let submit = ()=>{
        console.log('submited');

        let data ={
          "email":email,
          "password":password
        }

        fetch("http://localhost:1337/api/logins",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then((res)=>{          
          console.log('res', res);
          if(res.status === 403){
            alert('no content in api')
          }
          return res.json()

        }).then((data)=>{
          try{
            console.log('data', data);
            if(data.code === 200){
              console.log('token', data.data.token)

              // Now store this userData to localStorage
              window.localStorage.setItem('userData',JSON.stringify(data.data));
              window.localStorage.setItem('role',data.data.role);
              if(data.data.role === 'admin'){
                window.location.href='/admindashboard';
              }
              if(data.data.role === 'enduser'){
                window.location.href='/enduserdashboard';
              }
              if(data.data.role === 'accountmanager'){
                window.location.href='/accountmanagerdashboard';
              }
              if(data.data.role === 'reseller'){
                window.location.href='/resellerdashboard';
              }

            }else{
              alert('Invalid Credentials');
            }
          } catch(error){
            alert('Invalid Credentials');
          }
          
        }).catch((error)=>{
          console.log('error', error);
        });
    }

    // 3. return statements
    // Every function return something
    return (
      <>
      <div className='container'>
        <form>
  <div className="form-group">
    <label>Email address</label>
    <input
      type="email" autoFocus name='email'
      onChange={e=>setEmail(e.target.value)}
       value={email}
      className="form-control"
      placeholder="Enter email"
    />
  </div>
  <div className="form-group">
    <label>Password</label>
    <input
      type="password" name='password'
      onChange={e=>setPassword(e.target.value)}
       value={password}
      className="form-control"
      placeholder="Password"
    />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
  <button type="button" onClick={submit} className="btn btn-primary">
    Submit
  </button>
</form>
</div>
      </>
    )
}
