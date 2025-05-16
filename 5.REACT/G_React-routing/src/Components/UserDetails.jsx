import { useNavigate, useRouteLoaderData } from "react-router-dom";

 
 const UserDetails = () => {
  const user = useRouteLoaderData('userLoader');
  const navigate = useNavigate();

  const {name} = user;

  const handleGoback = () => {
    navigate(-1);
  }

  return (
    <div>
      <h2> User name : {name} </h2>
      <button onClick={handleGoback}> Go back </button>
    </div>
  );
 };
 
 export default UserDetails;