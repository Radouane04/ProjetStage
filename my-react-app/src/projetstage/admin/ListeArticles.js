import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { delArticle } from './Actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const ListeArticles = ({setArticles}) => {
    const myArticles = useSelector((state)=>state.Banque);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchVisible, setSearchVisible] = useState(false); // État pour contrôler la visibilité de la barre de recherche

    const filteredArticles = myArticles.filter(article => {
        const fullName = `${article.first_name} ${article.last_name}`;
        return fullName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className='container p-3 list--article' style={{ backgroundColor: 'rgb(253, 97, 0)' }}>
            <h3 className='text-center text-light p-2 item--count'>Nombre Des Clients de la agence est : {filteredArticles.length}</h3>
            
            {/* Bouton de recherche */}
            <button 
                className="btn btn-light mb-3" 
                style={{ backgroundColor: 'rgb(253,253, 253)', color: 'rgb(253, 97, 0)' }}
                onClick={() => setSearchVisible(!searchVisible)}
            >
                   
                     <FontAwesomeIcon icon={faSearch} />
            </button>
            
            {/* Barre de recherche */}
            {searchVisible && (
                <input 
                    type="text" 
                    placeholder="Rechercher par nom..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="form-control" 
                />
            )}
            
            <div className='row'>
                {filteredArticles.map(a => (
                    <div key={a.id} className='col-lg-4 col-md-6 col-sm-12'>
                        <div className="card m-3 mx-auto" id='card' style={{width:'300px'}}>
                            <img className="card-img-top" src={`/img/${a.img}`} alt="Card image"/>
                            <div className="card-body">
                                <div className='mb-2'><div className='article--info'>ID </div>:  {a.id}</div>
                                <div className='mb-2'><div className='article--info'>Nom complet</div>:  {a.first_name} {a.last_name}</div>
                                <div className='mb-2'><div className='article--info'>solde</div>:  {a.solde}</div>
                                <div className='mb-2'><div className='article--info'>Numero Compte</div>:  {a.numeroCompte}</div>

                                <Link className='btn btn-primary mx-2 mt-3' to={`/Admin/details/${a.id}`}>Detail</Link>
                                <Link className='btn btn-success mx-2 mt-3' to={`/Admin/modifier/${a.id}`}>Modifier</Link>
                                <button onClick={()=>dispatch(delArticle(a.id))} className='btn btn-danger mx-2 mt-3' >Supprimer</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <Link className='btn btn-info m-3 text-dark '  style={{ backgroundColor: 'rgb(253,253, 253)', color: 'rgb(253, 97, 0)' }} to='/Admin'>Retour</Link>
            <Link className='btn btn-info m-3 text-dark ' style={{ backgroundColor: 'rgb(253,253, 253)',color: 'rgb(253, 97, 0)' }} to='/Admin/Ajouter'>Ajouter une équipe</Link>
        </div>
    );
}
export default ListeArticles;
