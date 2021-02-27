import { ArticlesActionType, SET_ALL_ARTICLES } from '../types/actions'
import { Article } from '../types/Article'
import axios from 'axios'

export const setAllArticles = (articles: Article[]): ArticlesActionType => ({
  type: SET_ALL_ARTICLES,
  articles
})

export const getAllArticlesFromAPI = () => {
  return (dispatch: (arg0: ArticlesActionType) => void): void => {
    axios
      .get('http://testapi.kalkivera.com/shoppingcart/api/online-shopping/v1/products', {
        headers: {
          Authorization: 'Basic Z3Vlc3Q6Z3Vlc3Q=',
          Accept: 'application/json'
        }
      })
      .then(({ data }) => {
        dispatch(setAllArticles(data))
      })
  }
}
