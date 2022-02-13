import { ActionType, ProductAction, ProductsState } from '../../types/product'

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null
}

export const productReducer = (
  state = initialState,
  action: ProductAction
): ProductsState => {
  switch (action.type) {
    case ActionType.FETCH_PRODUCTS:
      return { isLoading: true, error: null, products: [] }

    case ActionType.FETCH_PRODUCTS_SUCCESS:
      return { isLoading: false, error: null, products: action.payload }

    case ActionType.FETCH_PRODUCTS_ERROR:
      return { isLoading: false, error: action.payload, products: [] }
    default:
      return state
  }
}


// пример запроса
// const isLoading: boolean = useTypedSelector(
//   (state) => state.product.isLoading
// );
