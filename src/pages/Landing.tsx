import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { getAllArticlesFromAPI } from '../actions/articles'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions } from '../types/actions'
import { Article } from '../types/Article'
import { AppState } from '../store/configureStore'
import { connect } from 'react-redux'
import ProductLink from '../components/ProductLink'
import Header from '../components/Header'
import { Cart } from '../types/Cart'

type Props = LinkStateProps & LinkDispatchProps

const Landing = ({ articles, getAllProductsFromApi, cart}: Props): JSX.Element => {
  useEffect(() => {
    getAllProductsFromApi()
  }, [])
  return (
    <div>
      <Header cart={cart} />
      <div className="container mx-auto flex items-center justify-around flex-wrap pt-4 pb-12">
        {articles.map(product => (
          <ProductLink key={product.prodName} product={product} />
        ))}
      </div>
    </div>
  )
}

interface LinkDispatchProps {
  getAllProductsFromApi: () => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
  getAllProductsFromApi: bindActionCreators(getAllArticlesFromAPI, dispatch)
})

interface LinkStateProps {
  articles: Article[]
  cart: Cart
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  articles: state.articles,
  cart: state.cart
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
