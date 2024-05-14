export function addArticles(articlesData){
    return {type:'AJOUTER_ARTICLES' , payload:articlesData}
}
export function delArticle(id){
    return {type:'DELETE_ARTICLES' , payload:id}
}
export function updateArticle(articlesData){
    return {type:'UPDATE_ARTICLE' , payload:articlesData}
}