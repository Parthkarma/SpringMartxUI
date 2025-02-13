import api from "../../api/api"
import React from 'react';

export const fetchProducts = (queryString) => async (dispatch) => {
try{
    dispatch({type : "IS_FETCHING" }); 
 const{data} = await api.get(`/public/products?${queryString}`);
 dispatch({
    type: "FETCH_PRODUCTS", 
    payload : data.content , 
    pageNumber : data.pageNumber , 
    pageSize : data.pageSize , 
    totalElements: data.totalElements , 
    totalPages : data.lastPages , 
    lastPages : data.lastPages,
 });
dispatch({type : "IS_SUCCESS" }); 
}
catch(error){
    console.log(error); 
    dispatch({type : "IS_ERROR" , 
        payload: error?.response?.data?.message || "Failed to fetch the products" , 
     }); 
}
};


export const addToCart = (data , qty = 1 ,toast ) =>
    (dispatch , getState) => {
   console.log(getState()) ; 
   const {products} = getState().products; 
   const getProducts = products.find(
      (item) => item.productId === data.productId
   );

   const isQuantityExist = getProducts.quantity  >= qty;

   if(isQuantityExist){
      dispatch({type : "ADD_CART" , payload : {...data , quantity :qty}});
      toast.success(`${data?.productName} added to the cart`);
     localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
   } else{
      toast.success("out of stock");

   }
  

  

};