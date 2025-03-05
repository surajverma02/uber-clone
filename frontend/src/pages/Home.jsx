import React, { useEffect } from "react";
import useUserStore from "../stores/UseUserStore";

const Home = () => {
  const { role, authUser } = useUserStore();

  if (authUser)
    return (
      <>
        {authUser.fullname.firstname} {role}
      </>
    );
  return (
    <>
      <h1>Home page</h1>
    </>
  );
};

export default Home;
