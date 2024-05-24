import React, { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import Login from './login';

const HomeA = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminState = localStorage.getItem('isAdmin');
    if (adminState) {
      setIsAdmin(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
  };

  return (
    <>
      {isAdmin ? (
        <>
          <Navigation logout={logout} />
        </>
      ) : (
        <Login setIsAdmin={setIsAdmin} />
      )}
    </>
  );
};

export default HomeA;
