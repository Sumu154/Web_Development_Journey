
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([]);

  // GET -> backend / database theke info get
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('http://localhost:3000/users');
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, [])
  // as [], dependency array is empty -> ejonne every method e setUser diye
  // user ke update korte hoy



  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const user = {name, email, image};
    

    // POST -> backend / server e user(input data) pathano
    const res = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      console.error('Error in response:', res.status, res.statusText);
      return; // Exit the function if there's an error
    }

    console.log(user);
    console.log('respons okay');
    const data = await res.json();
    console.log('User added', data);
    setUsers([...users, data]);
    console.log('done')
    // form.reset();
  }


  const handleUpdate = async (id) => {
    const name = prompt("Enter new name:");
    const email = prompt("Enter new email:");
    const image = prompt("Enter new image URL:");
  
    const updatedUser = { name, email, image };
    // console.log(updatedUser)
  
    const res = await fetch(`http://localhost:3000/users/${id}`, {  // id should be _id
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });
  
    if (!res.ok) {
      console.error('Error in response:', res.status, res.statusText);
      return;
    }
  
    const data = await res.json();
    // console.log('User updated', data);
    setUsers(users.map(it => it._id === id ? data : it)); // Match by _id

  };
  


  //  DELETE -> backend e delete er jonne request pathano..id ta pathaye dilam..
  // id diye khuje delete korte jani pare ejonne id ta pathno
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/users/${id}`, { // id should be _id
      method: 'DELETE',
    });

    console.log(id);
  
    if (!res.ok) {
      console.error('Error in response:', res.status, res.statusText);
      return;
    }
  
    setUsers(users.filter(user => user._id !== id)); // Match by _id
  };
  
  
  

  return (
    <>
      <h1> Client side form </h1>
      <h3> Numbers of Users: {users.length} </h3>
      <form onSubmit={handleSubmit} action="">
        <input type="text" name='name'  />
        <br />
        <input type="email" name='email'  />
        <br />
        <input type="text" name='image'  />
        <br />
        <input type="submit" value='add user'  />
      </form>

      {users.map((it) => {
        return (
          <div key={it._id}>
            <p> {it._id} </p>
            <p> {it.image} </p>
            <p> {it.name} </p>
            <p> {it.email} </p>
            <button onClick={()=> handleUpdate(it._id)}> Update </button>
            <button onClick={()=>handleDelete(it._id)}> Delete </button>
          </div>
        )
      })}
    </>
  )
}

export default App
