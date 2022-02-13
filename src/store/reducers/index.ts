import { combineReducers } from "redux";
import { productReducer } from './productsReduser';

export const rootReducer = combineReducers({
    product: productReducer,
})

export type RootState = ReturnType<typeof rootReducer>