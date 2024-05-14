import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const operations = ['Ajout', 'Suppression', 'Modification'];
const names = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Radouane'];

function getRandomOperation() {
    return operations[Math.floor(Math.random() * operations.length)];
}

function getRandomName() {
    return names[Math.floor(Math.random() * names.length)];
}

function Historique() {
    const [history, setHistory] = useState([]);

    // Fonction appelée une seule fois au montage du composant pour générer les opérations initiales
    useState(() => {
        const initialHistory = Array.from({ length: 10 }, () => ({
            operation: getRandomOperation(),
            name: getRandomName(),
            timestamp: new Date().toLocaleString() // Ajout de la date et de l'heure actuelle
        }));
        setHistory(initialHistory);
    }, []);

    // Fonction pour imprimer l'historique
    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <div className="App">
                <div>
                    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', }}>
                        <img src="/img/bpJPG.JPG" alt="BCP Logo" height="80px" width="200px" style={{ marginRight: 'auto' }} />
                        <button className="btn" style={{ backgroundColor: 'rgb(253, 97, 0)', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
                            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Se déconnecter</Link>
                        </button>
                    </nav>
                    <h1>Historique</h1> {/* Ajout du titre */}

                    <table>
                        <thead>
                            <tr>

                                <th>Type d'Opération</th>
                                <th>Nom</th>
                                <th>Date et Heure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((entry, index) => (
                                <tr key={index}>

                                    <td>{entry.operation}</td>
                                    <td>{entry.name}</td>
                                    <td>{entry.timestamp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <button onClick={handlePrint}>Imprimer</button> Bouton pour imprimer */}
                </div>
            </div>
        </>
    );
}

export default Historique;
