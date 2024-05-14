import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Banque } from './data.jsx';
import Login from './login';
import Layout from "./layout/Layout.jsx"


const buttonStyle = {
  padding: '15px 20px', // Increase padding to make the buttons bigger
  margin: '5px',
  backgroundColor: 'hsl(21.25deg 100% 50% / 86%)',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  color: 'white',
  textDecoration: 'none', // Hide underline
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

function HomeC() {
  const [isAdmin, setIsAdmin] = useState(false);
  const customer = Banque[0];

  return (
    <> 
      {isAdmin ? (
        <>
        <Layout/>
        <h1 className='container' style={{ color: 'rgb(253, 97, 0)', fontSize: '24px',textDecoration: 'underline'  }}>Espace Client</h1>
          <h1 style={nameS}>Bonjour M. <span style={comS}>{customer.first_name} {customer.last_name}</span></h1>
          {/* <h3>votre solde est {customer.solde}dhs</h3> */}
          <div style={containerStyle}>
            <div style={rowStyle}>
              <button style={buttonStyle}><Link to='/Client/Vir' style={{ color: 'white', textDecoration: 'none' }}>Effectuer un virement</Link></button>
              <button style={buttonStyle}><Link to='/Client/Compte' style={{ color: 'white', textDecoration: 'none' }}>Consulter l'historique de vos opérations</Link></button>
              <button style={buttonStyle}><Link to='/Client/Carte' style={{ color: 'white', textDecoration: 'none' }}>Demander une carte bancaire</Link></button>
            </div>
            <div style={rowStyle}>
              <button style={buttonStyle}><Link to='/Client/Rib' style={{ color: 'white', textDecoration: 'none' }}>Demander votre RIB</Link></button>
              <button style={buttonStyle}><Link to='/Client/DmCheque' style={{ color: 'white', textDecoration: 'none' }}>Demander un carnet de chèques</Link></button>
              <button style={buttonStyle}><Link to='/Client/Reclamation' style={{ color: 'white', textDecoration: 'none' }}>Effectuer une réclamation</Link></button>
            </div>
          </div>
        </>
      ) : (
        <Login setIsAdmin={setIsAdmin} /> 
      )}
    </>
  );
}

export default HomeC;
