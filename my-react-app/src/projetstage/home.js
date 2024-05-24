import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
  };
  
  const linkStyle = {
    marginTop: '30px',
    textDecoration: 'none',
    color: 'gray',  // Set link color to gray
    transition: 'color 0.3s', // Smooth transition effect for color change
  };

  return (
    <>
    <Helmet>
        <title>BPM</title>
        <link rel="icon" href="/img/cheval.JPG" />
      </Helmet>
      <div className="NAVH" style={navStyle}>
        {/* Insert your logo here */}
        <img src="/img/bpJPG.JPG" alt="Logo" height="80px" width="200px" style={{ marginTop: '10px'}} />
        <Link to="/Actualite" style={linkStyle} >Actualité</Link>
        <Link to="/about" style={linkStyle} >A propos de nous</Link>
        <Link to="/Client" style={linkStyle} >Espace Client</Link>
        <Link to="/Admin" style={linkStyle} >Admin</Link>
      </div>
      <div style={{ backgroundImage: `url(/img/slogan.JPG)`, height: '400px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* You can add content inside this div if needed */}
      </div>
      <img src="/img/Slogan2.JPG" alt="Slogan 2" style={{ height: '400px', width: '100%' }} />
      <img src="/img/Slogan3.JPG" alt="Slogan 2" style={{ height: '400px', width: '100%' }} />

    </>
  );
};

export default Home;
