import React, { useState } from 'react';
import { Banque } from './data';
import Layout from "./layout/Layout.jsx"

const DmCheque = () => {
  const [nom, setNom] = useState(Banque[0].last_name || ''); // Utilisation du nom de famille du premier élément de Banque
  const [prenom, setPrenom] = useState(Banque[0].first_name || ''); // Utilisation du prénom du premier élément de Banque
  const [nombreCheques, setNombreCheques] = useState(0);
  const [numeroCarte, setNumeroCarte] = useState(Banque[0]['credit card'] || ''); // Utilisation du numéro de carte du premier élément de Banque

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique pour envoyer la demande à la banque
    alert(`Demande envoyée :\nNom: ${nom}\nPrénom: ${prenom}\nNombre de chèques souhaités: ${nombreCheques}\nNuméro de carte bancaire: ${numeroCarte}`);
    // Réinitialiser les champs après l'envoi
    setNom('');
    setPrenom('');
    setNombreCheques(0);
    setNumeroCarte('');
  };

  return (
    <div className='container'>
      <Layout/>
      <h2>Demande de carnet de chèques</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label" style={{ color: 'rgb(253, 97, 0)' }}>
          Nom :
          <input
            type="text"
            value={nom}
            className="form-control"
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </label >
        <br />
        <label className="form-label" style={{ color: 'rgb(253, 97, 0)' }}>
          Prénom :
          <input
            type="text"
            value={prenom}
            className="form-control"
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </label>
        <br />
        <label className="form-label" style={{ color: 'rgb(253, 97, 0)' }}>
          Numéro de carte bancaire :
          <input
            type="text"
            value={numeroCarte}
            className="form-control"
            onChange={(e) => setNumeroCarte(e.target.value)}
            required
          />
        </label>
        <br/>
        <label className="form-label" style={{ color: 'rgb(253, 97, 0)' }}>
          Nombre de pages souhaitées :
          <input
            type="number"
            value={nombreCheques}
            className="form-control"
            onChange={(e) => setNombreCheques(parseInt(e.target.value))}
            required
          />
        </label>
        <br />
        
        <button type="submit" style={{ backgroundColor: 'rgb(253, 97, 0)' }}>Envoyer la demande</button>
      </form>
    </div>
  );
};

export default DmCheque;
