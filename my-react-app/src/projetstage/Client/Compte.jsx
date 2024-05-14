import React from 'react';
import Layout from "./layout/Layout.jsx"

const HistoriqueOperations = () => {
  // Fonction pour générer un nombre aléatoire entre deux bornes
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Générer un historique d'opérations aléatoires
  const generateRandomOperations = () => {
    const operations = [];
    const operationTypes = ['Dépôt', 'Retrait', 'Virement'];

    for (let i = 0; i < 10; i++) {
      const operation = {
        id: i + 1,
        type: operationTypes[getRandomNumber(0, 2)],
        montant: getRandomNumber(100, 10000),
        date: new Date().toLocaleString()
      };
      operations.push(operation);
    }

    return operations;
  };

  // Récupérer les opérations aléatoires
  const operations = generateRandomOperations();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='container'>
      <Layout/>
      <h2>Historique des opérations</h2>
      <hr style={{ borderTop: '2px solid rgb(253, 97, 0)' }} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Montant</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {operations.map(operation => (
            <tr key={operation.id}>
              <td>{operation.id}</td>
              <td>{operation.type}</td>
              <td>{operation.montant} DH</td>
              <td>{operation.date}</td>
            </tr>
          
          ))}
          <br/>
          <button onClick={handlePrint}className="btn w-100" style={{ backgroundColor: 'rgb(253, 97, 0)' }}>Imprimer</button>
        </tbody>
      </table>
    </div>
  );
};

export default HistoriqueOperations;
