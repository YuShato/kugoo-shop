import axios from 'axios'
import { Dispatch } from 'redux'
import { MAX_PRODUCTS_LENGTH } from '../../consts/consts'
import { ActionType, ProductAction } from '../../types/product'

const currentUrl = 'http://localhost:3001/productsList'
const LOADING_ERROR_MSG = 'Произошла ошибка при загрузке товаров'

export const fetchProducts = (start = 0, end = MAX_PRODUCTS_LENGTH) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ActionType.FETCH_PRODUCTS })

      const response = await axios.get(currentUrl, {
        params: { _start: start, _end: end }
      })

      dispatch({
        type: ActionType.FETCH_PRODUCTS_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_PRODUCTS_ERROR,
        payload: LOADING_ERROR_MSG
      })
    }
  }
}

export function setProductsLimit (productsLimit: number): ProductAction {
  return { type: ActionType.SET_PRODUCTS_LIMIT, payload: productsLimit }
}
