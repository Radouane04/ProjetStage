import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addArticles } from './Actions'; // Assuming addArticles is the correct action

function AjouterClient() {
    const [clientInfo, setClientInfo] = useState({});
    const [err, setErr] = useState(false);
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.Banque); // Assuming this is the correct slice of state

    function handleClientChange(e) {
        const { name, value } = e.target;
        setClientInfo(oldInfo => ({ ...oldInfo, [name]: value }));
    }

    function handleFileChange(e) {
        const { name, files } = e.target;
        setClientInfo(oldInfo => ({ ...oldInfo, [name]: files[0].name }));
    }

    function ajouterClientHandler(e) {
        e.preventDefault();
        // Check for empty values
        const { id, last_name, first_name, address, gender, phone, work, solde, numeroCompte, email, password, img } = clientInfo;
        if (!id || !last_name || !first_name || !address || !gender || !phone || !work || !solde || !numeroCompte || !email || !password || !img) {
            return;
        }

        const existingClient = clients.find(client => client.id === id);
        // Check if there is no client with the same id before
        if (!existingClient) {
            dispatch(addArticles(clientInfo));
            alert("Le client a été ajouté");
        } else {
            setErr(true);
        }
    }

    return (
        <>
            <form onSubmit={ajouterClientHandler}>
                <div className='container'>
                    <h4 className='text-center text-secondary underline-background-size'>Veuillez entrer les informations du client</h4>
                    {err && <div className='alert alert-danger text-center mt-3'>Ce client existe déjà !</div>}
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)', textDecoration: 'underline' }}>Id (Numero de dossier):</label>
                    <input
                        className='form-control'
                        type='text'
                        name='id'
                        value={clientInfo.id || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)', textDecoration: 'underline' }}>Nom :</label>
                    <input
                        className='form-control'
                        type='text'
                        name='last_name'
                        value={clientInfo.last_name || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)', textDecoration: 'underline' }}>Prenom :</label>
                    <input
                        className='form-control'
                        type='text'
                        name='first_name'
                        value={clientInfo.first_name || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)', textDecoration: 'underline' }}>Adresse :</label>
                    <input
                        className='form-control'
                        type='text'
                        name='address'
                        value={clientInfo.address || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)', textDecoration: 'underline' }}>Sexe :</label>
                    <select
                        className='form-control'
                        name='gender'
                        value={clientInfo.gender || ''}
                        onChange={handleClientChange}
                    >
                        <option value="">Sélectionner</option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)', textDecoration: 'underline' }}>Telephone :</label>
                    <input
                        className='form-control'
                        type='number'
                        name='phone'
                        value={clientInfo.phone || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)', textDecoration: 'underline' }}>Job :</label>
                    <input
                        className='form-control'
                        type='text'
                        name='work'
                        value={clientInfo.work || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)', textDecoration: 'underline' }}>Solde :</label>
                    <input
                        className='form-control'
                        type='number'
                        name='solde'
                        value={clientInfo.solde || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)', textDecoration: 'underline' }}>Numero de Compte :</label>
                    <input
                        className='form-control'
                        type='number'
                        name='numeroCompte'
                        value={clientInfo.numeroCompte || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)', textDecoration: 'underline' }}>Photo du client :</label>
                    <input
                        className='form-control mt-3'
                        type='file'
                        name='img'
                        onChange={handleFileChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)', textDecoration: 'underline' }}>Email :</label>
                    <input
                        className='form-control'
                        type='email'
                        name='email'
                        value={clientInfo.email || ''}
                        onChange={handleClientChange}
                    />
                    <label className='form-label' style={{ color: 'rgb(253, 97, 0)', textDecoration: 'underline' }}>Mot de passe :</label>
                    <input
                        className='form-control'
                        type='text'
                        name='password'
                        value={clientInfo.password || ''}
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
