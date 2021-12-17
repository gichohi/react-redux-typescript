import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import { Dispatch } from "redux"
import { useEffect } from "react";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
    const dispatch: Dispatch<any> = useDispatch();
    useEffect(() => {
        const url = "https://fakestoreapi.com/products";
        const fetchData = async () => {
            axios.get<IProduct[]>(url)
            .then((response) => {
                dispatch(setProducts(response.data));
            }).catch((err) => {
                console.log(err);
            });
        };
        fetchData();
    },[]);
    return(
        <div className="ui grid container">
            <ProductComponent/>
      </div>
    )
};

export default ProductList;

