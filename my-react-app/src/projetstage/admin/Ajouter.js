import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { addArticles } from './Actions'; // Assuming addClient is the correct action
import { useDispatch, useSelector } from 'react-redux';
import { faUnderline } from '@fortawesome/free-solid-svg-icons';

function AjouterClient() {
    const [clientInfo, setClientInfo] = useState({});
    const [err, setErr] = useState(false);
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [generatedId, setGeneratedId] = useState('');
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.Banque); // Assuming this is the correct slice of state

    useEffect(() => {
        generateRandomId();
        generatePassword();
    }, []);

    function generateRandomId() {
        let randomId = '';
        do {
            randomId = Math.floor(100000 + Math.random() * 900000).toString();
        } while (clients.some(client => client.id === randomId));
        setGeneratedId(randomId);
    }

    function generatePassword() {
        const passwordLength = 8; // You can adjust the password length as needed
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setGeneratedPassword(password);
    }

    function handleClientChange(e) {
        const { name, value } = e.target;
        setClientInfo(prevInfo => ({ ...prevInfo, [name]: value }));
    }

    function ajouterClientHandler(e) {
        e.preventDefault();
        // Basic form validation, you might want to improve this
        const requiredFields = ['id', 'first_name', 'last_name', 'solde', 'numeroCompte', 'gender', 'address', 'phone', 'work', 'email', 'password'];
        if (requiredFields.some(field => !clientInfo[field])) {
            setErr(true);
            return;
        }

        const existingClient = clients.find(client => client.id === clientInfo.id);
        if (existingClient || clients.some(client => client.id === generatedId)) {
            setErr(true);
            alert("Ce client existe déjà !");
            return;
        }

        dispatch(addArticles(clientInfo)); // Assuming addClient is the correct action
        setClientInfo({});
        setErr(false); // Clear error state
        alert("Client bien ajouté");
    }

    return (
        <>
            <form onSubmit={ajouterClientHandler}>
                <div className='container'>
                    <h4 className='text-center text-secondary underline-background-size'>Veuillez entrer les informations du client</h4>
                    {err && <div className='alert alert-danger text-center mt-3'>Ce client existe déjà !</div>}
                    {/* Input fields */}
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)',textDecoration:'Underline' }}> Id (Numero de dossier):</label>

                    <input
                        className='form-control'
                        type='text'
                        name='id'
                        value={generatedId}
                        readOnly // The ID should be read-only
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)',textDecoration:'Underline' }}> nom :</label>
                    <input 
                        className='form-control'
                        type='text'
                        name='last_name'
                        value={clientInfo.last_name || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)',textDecoration:'Underline' }}> prenom :</label>
                    <input 
                        className='form-control'
                        type='text'
                        name='first_name'
                        value={clientInfo.first_name || ''}
                        onChange={handleClientChange}
                    /><label className='form-label' style={{ color: 'rgb(253, 97, 0)',textDecoration:'Underline' }}> adresse :</label>
                    <input 
                        className='form-control'
                        type='text'
                        name='address'
                        value={clientInfo.address || ''}
                        onChange={handleClientChange}
                    /><label className='form-label' style={{ color: 'rgb(253, 97, 0)',textDecoration:'Underline' }}> sexe :</label>
                    <input 
                        className='form-control'
                        type='text'
                        name='gender'
                        value={clientInfo.gender || ''}
                        onChange={handleClientChange}
                    /><label className='form-label' style={{ color: 'rgb(253, 97, 0)',textDecoration:'Underline' }}> telephone :</label>
                    <input 
                        className='form-control'
                        type='number'
                        name='phone'
                        value={clientInfo.phone || ''}
                        onChange={handleClientChange}
                    /><label className='form-label' style={{ color: 'rgb(253, 97, 0)',textDecoration:'Underline' }}> job :</label>
                    <input 
                        className='form-control'
                        type='text'
                        name='work'
                        value={clientInfo.work || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)',textDecoration:'Underline' }}> solde :</label>
                    <input 
                        className='form-control'
                        type='number'
                        name='solde'
                        value={clientInfo.solde || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)',textDecoration:'Underline' }}> numero de Compte  : </label>
                    <input 
                        className='form-control'
                        type='number'
                        name='numeroCompte'
                        value={clientInfo.numeroCompte || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)',textDecoration:'Underline' }}> photo du client : </label>
                    <input 
                        className='form-control mt-3'
                        type='file'
                        name='img'
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)',textDecoration:'Underline' }}> email  : </label>
                    <input
                        className='form-control'
                        type='email'
                        name='email'
                        value={clientInfo.email || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)',textDecoration:'Underline' }}> Mot de passe  : </label>
                    <input
                        className='form-control'
                        type='text'
                        name='password'
                        value={generatedPassword}
                        onChange={handleClientChange}
                    />
                    <input
                       className='btn w-100 text-white'
                        style={{ backgroundColor: 'rgb(253, 97, 0)' }}
                        type='submit'
                        value='Ajouter'
                    />
                    <Link className='btn btn-info mt-3 text-white p-1 w-25 bg-secondary border-light' to="/Admin">Retour</Link>
                </div>
            </form>
        </>
    );
}

export default AjouterClient;
