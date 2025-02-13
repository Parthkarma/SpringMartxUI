import api from "../../api/api";
import { toast } from "react-hot-toast"; // ✅ Correct import

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
   const { products } = getState().products;
   const getProduct = products.find((item) => item.productId === data.productId);

   if (getProduct && getProduct.quantity >= qty) {
      dispatch({ type: "ADD_CART", payload: { ...data, quantity: qty } });
      toast.success(`${data?.productName} added to the cart`); // ✅ Fixed toast usage
      localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
   } else {
      toast.error("Out of stock"); // ✅ Changed from `toast.success`
   }
};

export const increaseCartQuantity = (data, currentQuantity, setCurrentQuantity) => (dispatch, getState) => {
   const { products } = getState().products;
   const getProduct = products.find((item) => item.productId === data.productId);

   if (!getProduct) {
      toast.error("Product not found"); // ✅ Correct toast usage
      return;
   }

   if (getProduct.quantity >= currentQuantity + 1) {
      const newQuantity = currentQuantity + 1;
      setCurrentQuantity(newQuantity);

      dispatch({
         type: "ADD_CART",
         payload: { ...data, quantity: newQuantity },
      });

      localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
   } else {
      toast.error("Quantity reached the limit"); // ✅ Corrected toast usage
   }
};
