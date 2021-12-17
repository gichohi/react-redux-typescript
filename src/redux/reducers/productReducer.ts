import { ActionTypes } from "../constants/actionTypes";

const initialState: ProductState = {
    products: []
};

export const reducer = (
    state: ProductState = initialState,
    action: SetProductAction
): ProductState => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
           return {
               ...state,
               products: state.products.concat(action.products)
        }
        default:
            return state;
}
};