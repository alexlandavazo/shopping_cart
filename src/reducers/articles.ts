import { ArticlesActionType, SET_ALL_ARTICLES } from '../types/actions'
import { Article } from '../types/Article'

export const initialStateArticles: Article[] = []

const articlesReducerDefaultState: Article[] = initialStateArticles

const articlesReducer = (state = articlesReducerDefaultState, action: ArticlesActionType): Article[] => {
  switch (action.type) {
    case SET_ALL_ARTICLES:
      return action.articles
    default:
      return state
  }
}

export { articlesReducer }
