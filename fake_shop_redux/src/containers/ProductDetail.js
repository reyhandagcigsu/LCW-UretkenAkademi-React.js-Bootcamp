import React, {useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const {productId} = useParams();
   const dispatch = useDispatch();

   const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=> {
        console.log("err", err);
    } )
    dispatch(selectedProduct(response.data));
   };

   useEffect(()=> {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
        dispatch(removeSelectedProduct());
    }
   }, [productId]);

  

    return(
        <div className="ui grid container">
            <div className="ui placeholder segment"> 
            <div className=""> 

            </div>
            
             </div>
            

            </div>

      
    )

}


export default ProductDetail;