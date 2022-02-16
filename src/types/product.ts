export enum ActionType {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
  SET_PRODUCTS_LIMIT = 'SET_PRODUCTS_LIMIT',
  SET_PRODUCTS_LENGTH = 'SET_PRODUCTS_LENGTH'
}

export interface ProductsState {
  products: any[]
  isLoading: boolean
  error: null | string
  productsLimit: number
  maxProductsLength: number
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

interface SetProductsLimit {
  type: ActionType.SET_PRODUCTS_LIMIT
  payload: number
}
interface SetProductsLength {
  type: ActionType.SET_PRODUCTS_LENGTH
  payload: number
}



export type ProductAction =
  | FetchProductsAction
  | FetchProductsActionError
  | FetchProductsActionSuccess
  | SetProductsLimit
  | SetProductsLength
