import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineLogin } from "react-icons/ai";
const LogIn = () => {
    const navigate = useNavigate();
    const [loader , setLoader] = useState(false); 

   const {
    register , 
    handleSubmit , 
    formState : {errors} , 
   } = useForm ({
    mode : "onTouched" , 
   }) ; 

const loginHandler = async(data) => {
    console.log("Login Click") ; 
}

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
    <hr className="mt-2 mb-5 text-black"/>
    <hr />
  </form>
</div>

    );
}
export default LogIn ; 