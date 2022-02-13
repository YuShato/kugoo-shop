import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../../types/product'

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ActionType.FETCH_PRODUCTS })
      const response = await axios.get('http://localhost:3001/productsList')

      dispatch({
        type: ActionType.FETCH_PRODUCTS_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_PRODUCTS_ERROR,
        payload: 'Произошла ошибка при загрузке товаров'
      })
    }
  }
}
