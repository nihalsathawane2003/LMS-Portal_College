// import {useState} from 'react'
// // import './App.css';

// function App() {
//   const [name, setName] = useState('')
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [role, setRole] = useState('')

//   async function registerUser(event){
//     event.preventDefault()
//     const response = await fetch('http://localhost:3000/student/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name,
//         username,
//         password,
//         role,
//       }),
//     })

//     const data = await response.json()
//     console.log(data)
//   }

//   return <div>
//     <h1>Registrater</h1>
//     <form onSubmit = {registerUser}>
//     <input 
//          value = {name}
//          onChange={(e) => setName(e.target.value)}
//          type = "text" 
//          placeholder = "name"
//       />
//       <br/>
//       <input 
//          value = {username}
//          onChange={(e) => setUsername(e.target.value)}
//          type = "text" 
//          placeholder = "username"
//       />
//       <br/>
//       <input 
//          value = {password}
//          onChange={(e) => setPassword(e.target.value)}
//          type = "password" 
//          placeholder = "password"
//       />
//       <br/>
//       <input 
//          value = {role}
//          onChange={(e) => setRole(e.target.value)}
//          type = "text" 
//          placeholder = "role"
//       />
//       <br/>
//       <input type = "submit" value="Register"/>
//     </form>
//     </div>
// }
// export default App;
import { useState } from 'react';
import './LoginStyle.css'; // Import the CSS file

function App() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/student/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        username,
        password,
        role,
      }),
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Register</h1>
      <form className="login-form" onSubmit={registerUser}>
        <input
          className="login-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input
          className="login-input"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          type="text"
          placeholder="Role"
        />
        <input className="login-button" type="submit" value="Register" />
      </form>
    </div>
  );
}

export default App;
