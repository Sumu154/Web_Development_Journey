
const SimpleForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.name.value);
    console.log(e.target.email.value)
    console.log('form submitted!');
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>              {/* onsubmit kokhn trigger kora hoy -> jokhn kono form submit button click korbo */}
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;