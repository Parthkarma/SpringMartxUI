import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { FaBoxOpen, FaDollarSign, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ItemContent from "./ItemContent";
import { formatPrice } from "../../utils"; // Adjust path if needed

const Cart = () => {
    const { cart } = useSelector((state) => state.carts);

    // ✅ Calculate total price
    const totalPrice = cart?.reduce(
        (acc, cur) => acc + Number(cur?.specialPrice || 0) * Number(cur?.quantity || 0),
        0
    );

    if (!cart || cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <FaBoxOpen size={80} className="text-gray-400" />
                <h1 className="text-3xl font-semibold text-gray-800 mt-4">Your Cart is Empty</h1>
                <p className="text-lg text-gray-500">Looks like you haven't added anything yet.</p>
                <Link to="/products">
                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                        <FaShoppingBasket />
                        Start Shopping
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-10">
            {/* Cart Header */}
            <div className="flex flex-col items-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-2">
                    <MdShoppingCart size={40} className="text-green-600" />
                    Your Cart
                </h1>
                <p className="text-lg text-gray-600 mt-2">All your selected items</p>
            </div>

            {/* Cart Table Header */}
            <div className="grid md:grid-cols-6 grid-cols-4 gap-4 pb-2 font-semibold items-center border-b-2 border-gray-300">
                <div className="md:col-span-3 text-lg text-slate-800 flex items-center gap-2">
                    <FaShoppingBasket className="text-blue-500" />
                    Product
                </div>
                <div className="justify-self-center text-lg text-slate-800 flex items-center gap-2">
                    <FaDollarSign className="text-green-500" />
                    Price
                </div>
                <div className="justify-self-center text-lg text-slate-800 flex items-center gap-2">
                    <MdShoppingCart className="text-orange-500" />
                    Quantity
                </div>
                <div className="justify-self-center text-lg text-slate-800 flex items-center gap-2">
                    <FaDollarSign className="text-purple-500" />
                    Total
                </div>
            </div>

            {/* Cart Items */}
            <div>
                {cart.map((item, i) => (
                    <ItemContent key={i} {...item} />
                ))}
            </div>

            {/* Cart Footer */}
            <div className="border-t-2 border-slate-200 py-6 flex flex-col sm:flex-row justify-between items-center">
                <Link to="/products" className="flex gap-2 items-center text-blue-600 hover:text-blue-800 transition">
                    <MdArrowBack />
                    <span>Continue Shopping</span>
                </Link>

                <div className="flex flex-col items-end text-sm gap-1">
                    <div className="flex justify-between w-full md:text-lg text-sm font-semibold">
                        <span>Subtotal</span>
                        <span>{formatPrice(totalPrice)}</span>
                    </div>
                    <p className="text-gray-500">Taxes and shipping calculated at checkout</p>

                    <Link className="w-full flex justify-end" to="/checkout">
                        <button
                            className="mt-2 font-semibold w-[250px] py-2 px-4 rounded-lg bg-green-600 text-white flex items-center justify-center gap-2 hover:bg-green-700 transition duration-500"
                        >
                            <MdShoppingCart size={20} />
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
