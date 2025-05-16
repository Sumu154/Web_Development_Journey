import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  }

  // nmae ar email er jonne alada alada handler
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>              {/* onsubmit kokhn trigger kora hoy -> jokhn kono form submit button click korbo */}
        <input onChange={handleNameChange} type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StatefulForm;