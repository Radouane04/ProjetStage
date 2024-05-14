import React, { useState } from 'react';
import './style.css'; // Importer le fichier CSS pour styliser le composant
import Layout from "./layout/Layout.jsx"
const Carte = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelection = (image, altText) => {
    setSelectedImage(image);
    const confirmation = window.confirm(`Voulez-vous choisir la carte: ${altText}?`);
    if (confirmation) {
      alert("Votre demande a été envoyée avec succès !");
    }
  };

  return (
    
    <div className="container">
      <Layout/>
      <h2>Choisissez le modèle de carte que vous voulez:</h2>
      <div className="images-grid">
        <img src="/img/Carte/Carte1.JPG" alt="Image 1" className="carte-image" onClick={() => handleImageSelection("/img/Carte/Carte1.JPG", "LA PRO")} />
        <img src="/img/Carte/Carte2.JPG" alt="Image 2" className="carte-image" onClick={() => handleImageSelection("/img/Carte/Carte2.JPG", "LA GOLD")} />
        <img src="/img/Carte/Carte3.JPG" alt="Image 3" className="carte-image" onClick={() => handleImageSelection("/img/Carte/Carte3.JPG", "LA TTANIUM")} />
        <img src="/img/Carte/Carte4.JPG" alt="Image 4" className="carte-image" onClick={() => handleImageSelection("/img/Carte/Carte4.JPG", "#LIVE")} />
        <img src="/img/Carte/Carte5.JPG" alt="Image 5" className="carte-image" onClick={() => handleImageSelection("/img/Carte/Carte5.JPG", "BLACK")} />
        <img src="/img/Carte/Carte6.JPG" alt="Image 6" className="carte-image" onClick={() => handleImageSelection("/img/Carte/Carte6.JPG", "AILES")} />
      </div>
      <div>
        {/* {selectedImage && <p>Vous avez sélectionné l'image : {selectedImage}</p>} */}
      </div>
    </div>
  );
};

export default Carte;
