import React, { useState } from 'react';
import { Banque } from './data.jsx';
import './style.css'; // Import CSS file for styles
import Layout from "./layout/Layout.jsx"

const Virement = () => {
  
  const [recipientName, setRecipientName] = useState('');
  const [recipientAccountNumber, setRecipientAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [newBalance, setNewBalance] = useState(0); // State to hold the new balance after transfer
  const [showReceipt, setShowReceipt] = useState(false); // State to control receipt display
  const [transferDetails, setTransferDetails] = useState({}); // State to hold transfer details
  const [transferDateTime, setTransferDateTime] = useState(''); // State to hold transfer date and time
 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear any previous error messages
    setError('');

    // Validate form inputs
    if (!recipientName || !recipientAccountNumber || !amount || isNaN(parseFloat(amount))) {
      setError('Veuillez remplir tous les champs et saisir un montant valide.');
      return;
    }

    // Convert amount to number
    const parsedAmount = parseFloat(amount);

    // Prompt the user for confirmation
    const confirmed = window.confirm(`Voulez-vous confirmer le virement de ${parsedAmount} DH à ${recipientName} (${recipientAccountNumber}) ?`);
    if (!confirmed) {
      return; // Do nothing if not confirmed
    }

    // Find the recipient in the bank data
    const recipient = Banque.find(customer => customer.first_name === recipientName);

    if (!recipient) {
      setError('Le destinataire spécifié est introuvable.');
      return;
    }

    // Check if the sender has enough balance for the transfer
    if (recipient.solde < parsedAmount) {
      setError('Vous n\'avez pas suffisamment de solde pour effectuer ce virement.');
      return;
    }

    // Update balance in Banque data for both sender and recipient
    const updatedBanque = Banque.map(customer => {
      if (customer.first_name === recipientName) {
        return {
          ...customer,
          solde: customer.solde + parsedAmount
        };
      } else {
        return customer;
      }
    });

    // Calculate new balance for recipient after transfer
    const newRecipient = updatedBanque.find(customer => customer.first_name === recipientName);
    const newRecipientBalance = newRecipient ? newRecipient.solde : 0;

    // Update state with new balance and success status
    setNewBalance(newRecipientBalance);
    setSuccess(true);
    setShowReceipt(true); // Show receipt after successful transfer
    setTransferDetails({ recipientName, parsedAmount }); // Update transfer details
    setTransferDateTime(new Date().toLocaleString()); // Update transfer date and time
    setRecipientName('');
    setRecipientAccountNumber('');
    setAmount('');
  };

  // Function to print the result
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      <Layout/>
      {!success && (
        <div className="w-50 mx-auto s p-3 rounded-3 mt-4">
          <h2>Effectuer un virement</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="recipientName"className="form-label" style={{ color: 'rgb(253, 97, 0)' }}>Nom du destinataire:</label>
              <input
                type="text"
                className="form-control"
                id="recipientName"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="recipientAccountNumber" className="form-label"style={{ color: 'rgb(253, 97, 0)' }}>Numéro de compte du destinataire:</label>
              <input
                type="number"
                id="recipientAccountNumber"
                className="form-control"
                value={recipientAccountNumber}
                onChange={(e) => setRecipientAccountNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="amount"className="form-label" style={{ color: 'rgb(253, 97, 0)' }}>Montant:</label>
              <input
                type="number"
                id="amount"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit"className="btn w-100" style={{ backgroundColor: 'rgb(253, 97, 0)' }}>Valider le virement</button>
          </form>
        </div>
      )}
      {success && (
        <div className="receipt-container">
          <p style={{ color: 'green' }}>Virement effectué avec succès. </p>
          {showReceipt && (
            <div>
              <h2>Reçu:</h2>
              <hr style={{ borderTop: '2px solid rgb(253, 97, 0)' }} />
              <p>Nom du destinataire: {transferDetails.recipientName}</p>
              <p>Montant transféré: {transferDetails.parsedAmount} DH</p>
              <p>Date et heure du virement: {transferDateTime}</p>
              <button  style={{ backgroundColor: 'rgb(253, 97, 0)' }} onClick={handlePrint}>Imprimer le reçu</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Virement;


