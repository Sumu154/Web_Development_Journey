import { useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(nameRef.current);
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>              {/* onsubmit kokhn trigger kora hoy -> jokhn kono form submit button click korbo */}
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input ref={emailRef} type="email" name="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;