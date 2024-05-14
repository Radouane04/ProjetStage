import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import Login from './login';

const HomeA = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      {isAdmin ? (
        <>
        <Navigation />
        </>
      ) : (
        <Login setIsAdmin={setIsAdmin} /> 
      )}
    </>
  );
};

export default HomeA;
