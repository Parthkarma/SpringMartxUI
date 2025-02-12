import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () =>{
            return (
                <div className="lg:px-14 sm:px-8 px-4 py-10">
                    <div className="flex flex-col items-center mb-12">
                               <h1 className="text-4xl font-bold text-gray-900 flex items-center gap">
                                <MdShoppingCart size ={36} className="text-gray-700" />
                                Your Cart 
                               </h1>
                               <p className="text-lg text-gray-600 mt-2">
                                All you selected items 
                               </p>
                    </div>
                    <div className="grid md:grid-cols-6 grid-cols-4 gap-4 pb-2 font-semibold items-center">
    <div className="md:col-span-3 justify-self-start text-lg text-slate-800">
        Product
    </div>
    <div className="justify-self-center text-lg text-slate-800">
        Price
    </div>
    <div className="justify-self-center text-lg text-slate-800">
        Quantity
    </div>
    <div className="justify-self-center text-lg text-slate-800">
        Total 
    </div>
</div>
<div
 className="border-t-[1.5px] border-slate-200 py-4 flex sm:flex-row sm:px-0 px-2  flex-col sm:justify-between gap-4"
>
    <div></div>
                    <div className="flex text-sm gap-1 flex-col">
 <div className="flex justify-between w-full md:text-lg text-sm font-semibold">
    <span>
        Subtotal
    </span>
    <span> 
        $400
    </span>
 </div>
 <p className="text-slate-500">
    Taxes and shipping calculated at checkout 
 </p>
<Link className="w-full flex justify-end" to="/checkout">
<button onClick={()=>{}}
    className="font-semibold w-[300px] py-2 px-4 rounded-sm bg-fuchsia-900 text-white flex items-center justify-center gap-2 hover:text-amber-300 transition duration-500"
    >
    <MdShoppingCart size = {20} />
    Checkout

</button>

</Link>

<Link className="flex gap-2 items-center mt-2 text-slate-500" to="/products">
<MdArrowBack/>
<span>
    Continue Shopping
</span>



</Link>




 </div>
</div>
</div>
            )
};
export default Cart ;