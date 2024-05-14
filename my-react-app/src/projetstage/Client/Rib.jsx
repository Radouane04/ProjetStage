import React from 'react';
import { Banque } from './data';
import Layout from "./layout/Layout.jsx"

const Rib = () => {
  // Fonction pour générer un numéro de RIB aléatoire
  const genererRibAleatoire = () => {
    const ribAleatoire = '450' + Math.floor(Math.random() * 100000000000000000);
    return ribAleatoire;
  };

  // Récupérer uniquement le premier client de la banque
  const premierClient = Banque[0];

  // Style pour la couleur
  const styleCouleur = { color: 'rgb(253, 97, 0)' };

  // Fonction pour imprimer la page
  const imprimerPage = () => {
    window.print();
  };

  return (
    <div className='container'>
      <Layout/>
      <h2 style={styleCouleur}>Votre Numéro de RIB </h2>
      <hr style={{ borderTop: '2px solid rgb(253, 97, 0)' }} />
      <p>
        <strong style={styleCouleur}>Nom :</strong> {premierClient.last_name},
        <br />
        <strong style={styleCouleur}>Prénom :</strong> {premierClient.first_name},
        <br />
        <strong style={styleCouleur}>RIB :</strong> {genererRibAleatoire()}
      </p>
      <button onClick={imprimerPage} style={{ backgroundColor: 'rgb(253, 97, 0)', color: 'white' }}>Imprimer</button>
    </div>
  );
};

export default Rib;
