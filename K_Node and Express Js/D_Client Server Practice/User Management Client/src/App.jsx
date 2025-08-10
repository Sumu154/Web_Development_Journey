import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('http://localhost:3000/users');
      const data = await res.json();
      setUsers(data);
    }

    loadData();
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);

    // backend e form data pathano
    const res = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    const newUsers = [...users, data];
    setUsers(newUsers);
    form.reset();
  }
  
  return (
    <>
      
      <h1> User Management </h1>
      <h3> Numbers of Users: {users.length} </h3>
      <form onSubmit={handleSubmit} action="">
        <input type="text" name='name'  />
        <br />
        <input type="email" name='email'  />
        <br />
        <input type="submit" value='add user'  />
      </form>
      {users.map((it) => {
        return (
          <div key={it.id}>
            <h3> {it.id} </h3>
            <p> {it.name} </p>
            <p> {it.email} </p>
          </div>
        )
      })}
    </>
  )
}

export default App
