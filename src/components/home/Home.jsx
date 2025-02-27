import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import { useEffect } from "react";
import { fetchProducts } from "../../store/actions";
import ProductCart from "../shared/ProductCart"; 

import { FaExclamationTriangle } from "react-icons/fa";
import Loader  from "../shared/Loader";

const Home = () =>{
    const dispatch = useDispatch() ; 
    const {products } = useSelector((state) => state.products); 
    const {isLoading , errorMessage} = useSelector(
        (state)=> state.errors
    );
useEffect(() =>{
    dispatch(fetchProducts());
} , [dispatch]);
    return (
       <div className ="lg:px-14 sm:px-8 px-4">
        <div className="py-6">  <HeroBanner/> </div>
          
               <div className="py-5">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h1 className="text-slate-800 text-4xl font-bold"> Products </h1>
                        
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-3 leading-relaxed">
    Handpicked selection of top-rated items to elevate your lifestyle. Shop now and discover the best deals curated just for you!
  </p>
                </div>
               </div>

                     {isLoading ? (
                        <Loader/>
                     ) : errorMessage ? (
                                      <div className="flex justify-center items-center h-[200px]">
                                                            <FaExclamationTriangle  className="text-slate-800 text-3xl mr-2"/>
                                                            <span className ="text-slate-800 text-lg font-medium">
                                                                {errorMessage}
                                                            </span>
                                                        </div>
                     ) : ( 
           <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                                 {products && 
                                 products?.slice(0,8)
                                 .map((item , i) => <ProductCart key={i} {...item} /> 
                                 )}
                        </div>
                     )}
                </div>     
        
    )
}
export default Home ; 