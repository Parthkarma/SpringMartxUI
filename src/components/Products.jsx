import ProductCart from "./shared/ProductCart";
import {FaExclamationTriangle} from "react-icons/fa" ; 
import { useEffect} from 'react';
import { useDispatch  , useSelector  } from "react-redux";
import { fetchProducts } from "../store/actions";
import Filter from "./Filter";
import Loader from "./shared/Loader";
import useProductFilter from "./useProductFilter";
const Products = () => {
    const  { isLoading , errorMessage } = useSelector(
        (state) => state.errors 
    );
  
    const {products} = useSelector(
        (state) => state.products
    )

    const categories = useSelector((state) => state.categories) || [];

    const dispatch = useDispatch();  
    useProductFilter(); 

    useEffect(() => {
        dispatch(fetchProducts()); 
    } , [dispatch]) ; 

    return (

        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
          <Filter categories ={categories ? categories : [] }/>
             { isLoading ? (
              <Loader />
            ) :  errorMessage ? (
                    <div className="flex justify-center items-center h-[200px]">
                        <FaExclamationTriangle  className="text-slate-800 text-3xl mr-2"/>
                        <span className ="text-slate-800 text-lg font-medium">
                            {errorMessage}
                        </span>
                    </div>
            ) : (
                    <div className="min-h-[700px]">
                        <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                                 {products && 
                                 products.map((item , i) => <ProductCart key={i} {...item} /> 
                                 )}
                        </div>
                    </div>  
         )
            }
        </div>
    )
}
export default Products ;