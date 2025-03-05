import React, { useEffect } from "react";
import useUserStore from "../stores/UseUserStore";

const Home = () => {
  const { authUser } = useUserStore();
  console.log(authUser);

  if (authUser) return <>{authUser.fullname.firstname}</>;

  return <div>Home</div>;
  
};

export default Home;
