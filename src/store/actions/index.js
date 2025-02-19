import api from "../../api/api";
import { toast } from "react-hot-toast";
export { formatPrice } from "../../utils/formatPrice"; 
export const fetchProducts = (queryString) => async (dispatch) => {
   try {
      dispatch({ type: "IS_FETCHING" });
      const { data } = await api.get(`/public/products?${queryString}`);

      dispatch({
         type: "FETCH_PRODUCTS",
         payload: data.content,
         pageNumber: data.pageNumber,
         pageSize: data.pageSize,
         totalElements: data.totalElements,
         totalPages: data.lastPages,
         lastPages: data.lastPages,
      });

      dispatch({ type: "IS_SUCCESS" });
   } catch (error) {
      console.log(error);
      dispatch({
         type: "IS_ERROR",
         payload: error?.response?.data?.message || "Failed to fetch the products",
      });
   }
};
export const addToCart = (data, qty = 1) => (dispatch, getState) => {
   console.log(getState());
   const { products = [] } = getState().products || {}; 
   const getProduct = products.find((item) => item.productId === data.productId);

   if (getProduct && getProduct.quantity >= qty) {
      dispatch({ type: "ADD_CART", payload: { ...data, quantity: qty } });
      toast.success(`${data?.productName} added to the cart`);
   } else {
      toast.error("Out of stock");
   }

   const updatedCart = getState().carts.cart;
   localStorage.setItem("cartItems", JSON.stringify(updatedCart)); //  Safer update
};
export const increaseCartQuantity = (data, currentQuantity, setCurrentQuantity) => (dispatch, getState) => {
   const { products = [] } = getState().products || {}; //  Null check
   const getProduct = products.find((item) => item.productId === data.productId);

   if (!getProduct) {
      toast.error("Product not found");
      return;
   }

   if (getProduct.quantity >= currentQuantity + 1) {
      const newQuantity = currentQuantity + 1;
      setCurrentQuantity(newQuantity);

      dispatch({
         type: "ADD_CART",
         payload: { ...data, quantity: newQuantity },
      });

      toast.success("Quantity updated");

      const updatedCart = getState().carts.cart;
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
   } else {
      toast.error("Quantity reached the limit");
   }
};
export const decreaseCartQuantity = 
(data , newQuantity) =>( dispatch , getState ) =>{
   dispatch({
      type : "ADD_CART" , 
      payload : {...data , quantity : newQuantity} , 
   }) ;
   localStorage.setItem("cartItems" , JSON.stringify(getState().carts.cart));
}
export const  removeFromCart = 
( data , toast) => (dispatch , getState) =>{
   dispatch({type:"REMOVE_CART" , payload : data});
   toast.success(`${data.productName} remove from cart`);
   localStorage.setItem("cartItems" , JSON.stringify(getState().carts.cart));
}

export const authenticateSignInUser = 
(sendData , toast , reset , navigate , setLoader ) => async( dispatch) =>{

    try {
      setLoader(true) ; 
      const {data} = await api.post("/auth/signin" , sendData) ; 
      dispatch({ type : "LOGIN_USER" , payload :data }); 
      localStorage.setItem("auth" , JSON.stringify(data)); 
      reset()
      toast.success("Login Success");
      navigate("/");
    } catch (error) {
           console.log(error);
           toast.error(error.response.data.message || "Internal Server  Error" );
    }
    finally {
      setLoader(false); 
    }



}

