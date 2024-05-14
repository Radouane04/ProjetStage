import { Banque } from "./Articles"
const initialState = {Banque:Banque} ;

export default function articlesReducer(state=initialState , action){
    switch (action.type){
        case 'DELETE_ARTICLES':
            return {...state , Banque:state.Banque.filter(a=>a.id !== action.payload)}
        case 'AJOUTER_ARTICLES':
            return {...state , Banque:[...state.Banque , action.payload]}
        case 'UPDATE_ARTICLE':
            const updatedBanque = state.Banque.map((article) =>
        article.id === action.payload.id ? action.payload : article
      );
      return {
        ...state,
        Banque: updatedBanque,
      };

            default:
            return state;
    }
}