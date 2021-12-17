import { ActionTypes } from "../constants/actionTypes";


export const AddProduct = (product: IProduct) => {
    const action: ProductAction = {
        type: ActionTypes.ADD_PRODUCT,
        product
    };
    return action;
};

export const RemoveProduct = (product: IProduct) => {
    const action: ProductAction = {
        type: ActionTypes.REMOVE_PRODUCT,
        product
    };
    return action;
};

export const setProducts = (products: IProduct[]) => {
    const action: SetProductAction = {
        type: ActionTypes.SET_PRODUCTS,
        products
    };
    return action;
};