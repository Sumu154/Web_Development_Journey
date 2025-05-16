import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);

  return (
    <div className="bg-slate-100">
      <Header></Header>
      {
        navigation.state==='loading' ? <p>Loading...</p> : 
        <Outlet>  </Outlet>         
      }
      {/* child routes render here..mane Homer child gula ekhanei dekhte pabo */}
      
      <Footer></Footer>
    </div>
  );
};

export default Home;