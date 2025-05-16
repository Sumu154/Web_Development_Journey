{
  // define type 
  type User = {
    name: string;
    email: string;
    id: number;
  }

  const fetchUser = async (id: number): Promise<User> => { //promise ta user type er jinish return kortece so <User>
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(id === 0) {
          reject("User not found");
        }
        else {
          resolve({
            name: "sumaiya",
            email: "sumaiya@gmail.com",
            id
          });
        }
      }, 1500);
    });
  }

  const showUser = async (): Promise<void> => {
    try{
      const user = await fetchUser(1);
      console.log("User loaded:", user);
    } 
    catch(error) {
      console.error("Error:", error);
    }
  };

  showUser();
}
