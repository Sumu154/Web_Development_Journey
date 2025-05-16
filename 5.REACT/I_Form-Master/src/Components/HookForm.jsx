import React from 'react';
import useInputState from '../Utils/Hooks/useInputState';

const HookForm = () => {
  const [name, handleNameChange] = useInputState('sumu');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>              {/* onsubmit kokhn trigger kora hoy -> jokhn kono form submit button click korbo */}
        <input onChange={handleNameChange} type="text" name="name"  value={name}/>
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;