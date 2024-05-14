import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const buttonStyle = {
    padding: '15px 20px',
    margin: '5px',
    backgroundColor: 'hsl(21.25deg 100% 50% / 86%)',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '70px',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
  };
  const nameS = {
    textAlign: 'center',
  };
  
  const comS = {
    color: 'hsl(21.25deg 100% 50% / 86%)',
  };
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px',  }}>
        <img src="/img/bpJPG.JPG" alt="BCP Logo" height="80px" width="200px" style={{ marginRight: 'auto' }} />
        <button className="btn" style={{ backgroundColor: 'rgb(253, 97, 0)', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
          <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Se déconnecter</Link>
        </button>
      </nav>
      <h1 className='container' style={{ color: 'rgb(253, 97, 0)', textDecoration: 'underline' }}>Espace Admin</h1>

<h1 style={nameS}>Bonjour M. <span style={comS}> Walid</span></h1>
      <div style={containerStyle}>
      
        <div style={rowStyle}>
          <button style={buttonStyle}><Link to='/Admin/Ajouter' style={{ color: 'white', textDecoration: 'none' }}> Nouveau Client</Link></button>
          <button style={buttonStyle}><Link to='/Admin/listArticles' style={{ color: 'white', textDecoration: 'none' }}>Consulter la list des client</Link></button>
          <button style={buttonStyle}><Link to='/Admin/Historique' style={{ color: 'white', textDecoration: 'none' }}>Historique des operation</Link></button>
        
        </div>
      </div>
    </div>
  );
};

export default Navigation;
