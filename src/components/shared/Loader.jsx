import {RotatingLines} from "react-loader-spinner" ; 
const Loader = () => {
    return ( 
                
         <div className="flex justify-center items-center w-full h-[450px]">
            <div className="flex flex-col items-center gap-1"> 

       
                   
         <RotatingLines
                       visible ={true}
                       height = "96"
                       width = "96"
                       color = "grey"
                       strokewidth = "5"
                       animationDuration ="0.75"
                       ariaLabel = "rotating-lines-loading"
                       wrapperStyle = {{}}
                       wrapperClass = ""
                        />
                             </div>
                             </div>
    ) ; 
}

export default Loader;