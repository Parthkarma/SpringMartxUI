import { useState, useCallback } from "react";  
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineLogin } from "react-icons/ai";
import InputField from "../shared/InputField";
import {useDispatch} from "react-redux";
import { authenticateSignInUser } from "../../store/actions";
import {toast} from "react-toastify"; 
const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, 
    } = useForm({
        mode: "onTouched",
    });

    const loginHandler = useCallback(async (data) => {
        if (loader) return;

        setLoader(true);
        console.log("Login Clicked", data);
        dispatch(authenticateSignInUser(data, toast, navigate, setLoader));  

        setTimeout(() => {
            setLoader(false);
            navigate("/products"); 
        }, 2000);
    }, [loader, navigate]);

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gray-100">
            <form
                onSubmit={handleSubmit(loginHandler)}
                className="sm:w-[450px] w-[360px] bg-white shadow-lg border border-gray-300 py-8 sm:px-8 px-4 rounded-md"
            >
                <div className="flex flex-col items-center justify-center space-y-4">
                    <AiOutlineLogin className="text-slate-800 text-5xl" />
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                        Login Here
                    </h1>
                </div>
                <hr className="mt-2 mb-5 text-black" />

                {/* ✅ Changed Email to Username */}
                <InputField
                    label="Username"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    required
                    register={register}
                    errors={errors}
                    message="Username is required"
                />

                {/* ✅ Password Field */}
                <InputField
                    label="Password"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    register={register}
                    errors={errors}
                    message="Password must be at least 8 characters long"
                />

                <button
                    type="submit"
                    disabled={loader}
                    className={`mt-4 w-full py-2 rounded-md font-semibold ${
                        loader ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                >
                    {loader ? "Logging in..." : "Login"}
                </button>

                <p className="text-center text-sm text-slate-700 mt-6">
                    Don't have an account?  
                    <Link className="font-semibold underline hover:text-black" to="/register">
                        <span> SignUp</span>
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LogIn;
