import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const DetailArticleRechercher = () => {
    const {id}=useParams()
    const Article = useSelector((state)=>state.Banque)
    const ArticleRechercher = Article.find(article=>article.id == id);
    return (
        <div className='container'>
            <h1 className='hello--title  mb-4'style={{ color: 'rgb(253, 97, 0)' }} >Detail du client {ArticleRechercher.id}</h1>
            <div className='card w-50 mx-auto p-4  text-light ' >
                <img className="card-img-top" src={`/img/${ArticleRechercher.img}`} alt="Card image"/>
                <p className='detest'style={{ color: 'rgb(0, 0, 0)' }}>Nom complete :<span style={{ color: 'rgb(252, 97, 0)' }}> {ArticleRechercher.first_name} {ArticleRechercher.last_name}</span></p>
                <p className='detest'style={{ color:'rgb(0,0, 0)' }} >Solde:<span style={{ color: 'rgb(253, 97, 0)' }}> {ArticleRechercher.solde}</span></p>
                <p className='detest'style={{ color: 'rgb(0, 0, 0)' }} >Numero Compte : <span style={{ color: 'rgb(253, 97, 0)' }}>{ArticleRechercher.numeroCompte}</span></p>
                <p  className='detest'style={{ color: 'rgb(0, 0, 0)' }}>sexe : <span style={{ color: 'rgb(253, 97, 0)' }}>{ArticleRechercher.gender}</span></p>
                <p className='detest'style={{ color: 'rgb(0, 0, 0)' }} >adresse : <span style={{ color: 'rgb(253, 97, 0)' }}>{ArticleRechercher.address}</span></p>
                <p  className='detest'style={{ color: 'rgb(0, 0, 0)' }}>telephone :<span style={{ color: 'rgb(253, 97, 0)' }}> {ArticleRechercher.phone}</span></p>
                <p  className='detest'style={{ color: 'rgb(0, 0, 0)' }}>job : <span style={{ color: 'rgb(253, 97, 0)' }}>{ArticleRechercher.work}</span></p>
                <p className='detest'style={{ color: 'rgb(0, 0, 0)' }} >email : <span style={{ color: 'rgb(253, 97, 0)' }}>{ArticleRechercher.email}</span></p>
                <p  className='detest'style={{ color: 'rgb(0, 0, 0)' }}>mot de passe :<span style={{ color: 'rgb(253, 97, 0)' }}> {ArticleRechercher.password}</span></p>


            <Link className='btn  mt-3 w-100 text-white  border border-2 fw-bold fs-0 btn-outline-success' to='/Admin/listArticles' style={{ backgroundColor: 'rgb(253, 97, 0)' }}>Retour</Link>
            </div>
        </div>
    );
}
export default DetailArticleRechercher;
