export enum ActionType {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'
}

export interface ProductsState {
  products: any[]
  isLoading: boolean
  error: null | string
}

interface FetchProductsAction {
  type: ActionType.FETCH_PRODUCTS
}
interface FetchProductsActionSuccess {
  type: ActionType.FETCH_PRODUCTS_SUCCESS
  payload: any[]
}
interface FetchProductsActionError {
  type: ActionType.FETCH_PRODUCTS_ERROR
  payload: string
}

export type ProductAction =
  | FetchProductsAction
  | FetchProductsActionError
  | FetchProductsActionSuccess
