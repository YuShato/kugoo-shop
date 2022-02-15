import { MAX_PRODUCTS_LENGTH } from '../../consts/consts'
import { ActionType, ProductAction, ProductsState } from '../../types/product'

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
  productsLimit: MAX_PRODUCTS_LENGTH
}

export const productReducer = (
  state = initialState,
  action: ProductAction
): ProductsState => {
  switch (action.type) {
    case ActionType.FETCH_PRODUCTS:
      return { ...state, isLoading: true, error: null, products: [] }

    case ActionType.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        products: action.payload
      }

    case ActionType.FETCH_PRODUCTS_ERROR:
      return { ...state, isLoading: false, error: action.payload, products: [] }

    case ActionType.SET_PRODUCTS_LIMIT:
      return {
        ...state,
        productsLimit: action.payload
      }

    default:
      return state
  }
}
