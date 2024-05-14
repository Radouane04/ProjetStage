import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateArticle } from './Actions';

const ModifierArticles = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.Banque);
    const articleToEdit = articles.find((article) => article.id == id);

    const [editedArticle, setEditedArticle] = useState({});

    useEffect(() => {
        setEditedArticle(articleToEdit);
    }, [articleToEdit]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
    };

    // Handle image file change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setEditedArticle((prevArticle) => ({ ...prevArticle, img: file.name }));
    };

    const handleEditSubmit = () => {
        dispatch(updateArticle(editedArticle));
        alert("Modification reussite")
    };
    


    return (
        <div className=''>
            <h1 className='hello--title  mb-1'style={{ color: 'rgb(253, 97, 0)' }}>Modifier le client {articleToEdit.id}</h1>
            <div className='card w-50 mx-auto p-4  text-light' style={{ color: 'rgb(253, 97, 0)' }}>
                
                <form>
                    <img className="card-img-top" src={`/img/${articleToEdit.img}`} alt="Card image" />
                    
                    {/* Input for image file */}
                    <label style={{ color: 'rgb(253, 97, 0)' }} htmlFor='image'>Modifier Image:</label>
                    <input
                        className='form-control'
                        type='file'
                        id='image'
                        name='image'
                        onChange={handleImageChange}
                    />
                    <br /> 
                    {/* Other input fields */}
                    <label  style={{ color: 'rgb(253, 97, 0)' }} htmlFor='first_name'>prenom :</label>
                    <input
                        className='form-control'
                        type='text'
                        id='first_name'
                        name='first_name'
                        value={editedArticle.first_name}
                        onChange={handleInputChange}
                    />
                    <br /> 

                    <label  style={{ color: 'rgb(253, 97, 0)' }} htmlFor='last_name'>nom :</label>
                    <input
                        className='form-control'
                        type='text'
                        id='last_name'
                        name='last_name'
                        value={editedArticle.last_name}
                        onChange={handleInputChange}
                    />
                    <br />

                
                 

                    <label  style={{ color: 'rgb(253, 97, 0)' }} htmlFor='solde'>solde:</label>
                    <input
                        className='form-control'
                        type='text'
                        id='solde'
                        name='solde'
                        value={editedArticle.solde}
                        onChange={handleInputChange}
                    />
                    <br />

                    <label  style={{ color: 'rgb(253, 97, 0)' }} htmlFor='numeroCompte'>numeroCompte:</label>
                    <input
                        className='form-control'
                        type='text'
                        id='numeroCompte'
                        name='numeroCompte'
                        value={editedArticle.numeroCompte}
                        onChange={handleInputChange}
                    />
                     <label  style={{ color: 'rgb(253, 97, 0)' }} htmlFor='gender'>sexe:</label>
                    <input
                        className='form-control'
                        type='text'
                        id='gender'
                        name='gender'
                        value={editedArticle.gender}
                        onChange={handleInputChange}
                    /> <label  style={{ color: 'rgb(253, 97, 0)' }} htmlFor='address'>adresse:</label>
                    <input
                        className='form-control'
                        type='text'
                        id='address'
                        name='address'
                        value={editedArticle.address}
                        onChange={handleInputChange}
                    /> <label  style={{ color: 'rgb(253, 97, 0)' }} htmlFor='phone'>telephone:</label>
                    <input
                        className='form-control'
                        type='text'
                        id='phone'
                        name='phone'
                        value={editedArticle.phone}
                        onChange={handleInputChange}
                    /> <label  style={{ color: 'rgb(253, 97, 0)' }} htmlFor='work'>job:</label>
                    <input
                        className='form-control'
                        type='text'
                        id='work'
                        name='work'
                        value={editedArticle.work}
                        onChange={handleInputChange}
                    /> <label  style={{ color: 'rgb(253, 97, 0)' }} htmlFor='email'>email:</label>
                    <input
                        className='form-control'
                        type='text'
                        id='email'
                        name='email'
                        value={editedArticle.email}
                        onChange={handleInputChange}
                    /> <label  style={{ color: 'rgb(253, 97, 0)' }} htmlFor='password'>mot de passe :</label>
                    <input
                        className='form-control'
                        type='text'
                        id='password'
                        name='password'
                        value={editedArticle.password}
                        onChange={handleInputChange}
                    />
                    {/* Style the button like a link and position it accordingly */}
                    <button type='button' className='btn w-100 text-white'
                        style={{ backgroundColor: 'rgb(253, 97, 0)' }} onClick={handleEditSubmit}>
                        Valider
                    </button>
                </form>
                
                {/* Keep the link with its original class and position */}
                <Link className='btn btn-info mt-3 text-white p-1 w-25 bg-secondary border-light' to='/AdmiN/listArticles'>
                    Retour
                </Link>
            </div>
        </div>
    );
};

export default ModifierArticles;
