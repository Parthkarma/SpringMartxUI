import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import Status from './Status';
import { MdDone, MdClose } from "react-icons/md"; // Import the icons

function ProductViewModal({ open, setOpen, product, isAvailable }) {
  const { id, productName, image, description, quantity, price, discount, specialPrice } = product;

  return (
    <>
      <Dialog open={open} as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white p-6 shadow-xl">
              {image && (
                <div className="flex justify-center aspect-[3/2]">
                  <img
                    className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
                    src={image}
                    alt={productName}
                  />
                </div>
              )}

              <div className="px-6 pt-10 pb-2">
                <DialogTitle as="h3" className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6 text-gray-800">
                  {productName}
                </DialogTitle>
              </div>

              <p className="mt-2 text-sm/6 text-gray-500">
                {description}
              </p>

              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => setOpen(false)}
                >
                  Got it, thanks!
                </Button>
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="px-4 py-2 text-sm font-semibold text-slate-100 bg-gray-700 rounded-md"
                >
                  Close
                </button>
              </div>

              {isAvailable ? (
                <Status
                  text="In Stock"
                  icon={MdDone}
                  bg="bg-teal-200"
                  color="text-teal-800"
                />
              ) : (
                <Status
                  text="Out-of-Stock"
                  icon={MdClose}
                  bg="bg-rose-200"
                  color="text-rose-900"
                />
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default ProductViewModal;