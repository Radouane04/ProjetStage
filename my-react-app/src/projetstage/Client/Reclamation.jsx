import React, { useState } from 'react';
import Layout from "./layout/Layout.jsx"

const Reclamation = () => {
  const [sujet, setSujet] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique pour envoyer la réclamation à la banque
    console.log('Réclamation envoyée :', { sujet, description });
    // Afficher une alerte pour confirmer l'envoi de la réclamation
    alert('Réclamation envoyée avec succès!');
    // Réinitialiser les champs après l'envoi
    setSujet('');
    setDescription('');
  };

  return (
    <div className='container'>
      <Layout/>
      <h2>Écrire une réclamation</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label" style={{ color: 'rgb(253, 97, 0)' }}>
          Sujet :
          <input
            type="text"
            className="form-control"
            value={sujet}
            onChange={(e) => setSujet(e.target.value)}
            required
          />
        </label>
        <br />
        <label className="form-label" style={{ color: 'rgb(253, 97, 0)' }}>
          Description :
          <br/>
          <textarea
            value={description}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label >
        <br /><br />
        <button type="submit" style={{ backgroundColor: 'rgb(253, 97, 0)' }}>Envoyer la réclamation</button>
      </form>
    </div>
  );
};

export default Reclamation;
