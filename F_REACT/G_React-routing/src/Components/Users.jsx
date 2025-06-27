import { useRouteLoaderData } from "react-router-dom";

import User from "./user";

const Users = () => {
  const users =  useRouteLoaderData('usersLoader');
  console.log(users);
  // state --> data
  // state --> loader
  // useEffect
  // fetch --> state set --> set state
  return (
    <div>
      <h2> User portions  </h2>
      <p> Users here: {users.length} </p>
      <div>
        {users.map(it => {
          return <User key={it.id} user={it}> </User>
        })}
      </div>
    </div>
  );
};

export default Users;