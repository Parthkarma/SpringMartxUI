import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import SetQuantity from "./SetQuantity";
import { useDispatch } from "react-redux";
import { increaseCartQuantity } from "../../store/actions";


const ItemContent = ({
  productId,
  productName,
  image,
  description,
  quantity,
  price,
  discount,
  specialPrice,
  cartId,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const dispatch = useDispatch();

  const handleQtyIncrease = (cartItems) => {
    dispatch(
      increaseCartQuantity(
        cartItems,
        currentQuantity,
        setCurrentQuantity
      )
    );
  };

  return (
    <div className="grid md:grid-cols-5 grid-cols-4 md:text-md text-sm gap-4 items-center border-[1px] border-slate-100 py-4 px-2">

    
      <div className="md:col-span-2 flex flex-col gap-2 items-start">
        <h3 className="lg:text-[17px] text-sm font-semibold text-slate-600">
          {productName}
        </h3>
        <div className="md:w-36 sm:w-24 w-12">
          <img
            src={image}
            alt={productName}
            className="md:h-36 sm:h-24 h-12 w-full object-cover rounded-b-md"
          />
        </div>
        <button
          onClick={() => {}}
          className="flex items-center font-semibold space-x-2 px-4 py-1 text-xs border border-rose-600 text-rose-600 rounded-md hover:bg-red-50 transition-colors duration-300"
        >
          <HiOutlineTrash size={16} className="text-rose-600" />
          Remove
        </button>
      </div>

   
      <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
        ${Number(specialPrice)}
      </div>

      <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
        <SetQuantity
          quantity={currentQuantity}
          cardCounter={true}
          handleQtyIncrease={() =>
            handleQtyIncrease({
              image,
              productName,
              description,
              specialPrice,
              price,
              productId,
              quantity,
            })
          }
          handleQtyDecrease={() => {
            if (currentQuantity > 1) {
              setCurrentQuantity((prev) => prev - 1);
            }
          }}
        />
      </div>

     
      <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
        ${Number(currentQuantity) * Number(specialPrice)}
      </div>
    </div>
  );
};

export default ItemContent;
