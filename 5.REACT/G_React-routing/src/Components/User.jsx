import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {

  const {id, name, email, phone} = user;
  const navigate = useNavigate();

  // evabe navigate korte pari 
  const handleShowDetails = () => {
    navigate(`/users/${id}`)
  }

  return (
    <div className="border-[1px] border-red-700 rounded-lg m-10 p-4">
      <h2> {name} </h2>
      <p> email: {email} </p>
      <p className="mb-3"> phone: {phone} </p>
      <Link className="text-blue-500" to={`/users/${id}`}> Show Details </Link>
      <button onClick={handleShowDetails}> See details </button>
    </div>
  );
};

export default User;