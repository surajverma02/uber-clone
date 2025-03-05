import React from 'react'
import useUserStore from '../stores/UseUserStore';
import useCaptainStore from '../stores/UseCaptainStore';

const CaptainHome = () => {
    const { role } = useUserStore();
    const { authCaptain } = useCaptainStore();

    if (authCaptain)
        return (
          <>
            {authCaptain.fullname.firstname} {role}
          </>
        );
      return (
        <>
          <h1>Home page</h1>
        </>
  )
}

export default CaptainHome