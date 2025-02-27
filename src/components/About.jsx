import { FaStore, FaTruck, FaShieldAlt, FaShoppingCart, FaSmile } from "react-icons/fa";

const categories = [
    { 
        image: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=600", 
        name: "Electronics", 
        description: "Smartphones, laptops, and latest gadgets."
    },
    { 
        image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600", 
        name: "Fashion", 
        description: "Trendy clothing, footwear, and accessories."
    },
    { 
        image: "https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&w=600", 
        name: "Home & Kitchen", 
        description: "Furniture, decor, appliances, and essentials."
    },
    { 
        image: "https://images.pexels.com/photos/3735642/pexels-photo-3735642.jpeg?auto=compress&cs=tinysrgb&w=600", 
        name: "Health & Beauty", 
        description: "Skincare, wellness, and personal care."
    },
    { 
        image: "https://images.pexels.com/photos/6065415/pexels-photo-6065415.jpeg?auto=compress&cs=tinysrgb&w=600", 
        name: "Sports & Fitness", 
        description: "Gym gear, sportswear, and fitness equipment."
    },
    { 
        image: "https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
        name: "Books & Stationery", 
        description: "Educational books, office supplies, and journals."
    }
    
];

const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-14">
            {/* About Section */}
            <div className="text-center mb-12 animate-fadeIn">
    <h1 className="text-gray-900 text-6xl font-extrabold tracking-wide drop-shadow-md">
        Who We Are
    </h1>
    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed font-medium">
        At <span className="text-blue-500 font-bold">SpringMartX</span>, we are dedicated to offering 
        high-quality products at unbeatable prices. Our mission is to provide a seamless shopping 
        experience with <span className="font-semibold text-gray-800">
        fast shipping, secure payments, and exceptional customer support.
        </span>
    </p>
</div>


            {/* Why Choose Us Section */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Left Side Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our team carefully curates the **latest and most innovative products** to ensure 
                        **top-notch quality and customer satisfaction.** 
                        We go the extra mile to exceed expectations.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start mt-6 space-x-4">
                        <div className="flex items-center text-gray-700">
                            <FaShoppingCart className="text-blue-500 text-2xl mr-2" />
                            <span>Wide Product Selection</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaTruck className="text-green-500 text-2xl mr-2" />
                            <span>Fast & Secure Delivery</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaShieldAlt className="text-yellow-500 text-2xl mr-2" />
                            <span>100% Safe Payments</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaSmile className="text-pink-500 text-2xl mr-2" />
                            <span>Customer Happiness Guaranteed</span>
                        </div>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="About Us"
                        className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=About+Us"; }}
                    />
                </div>
            </div>

            {/* Product Categories Section */}
            <div className="mt-16">
                <h2 className="text-gray-800 text-4xl font-extrabold text-center">Explore Our Categories</h2>
                <p className="text-lg text-gray-600 text-center mb-8">
                    Browse through our carefully curated product categories and find what suits you best.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className="shadow-lg rounded-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105">
                            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
                                <p className="text-gray-600 mt-2">{category.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
