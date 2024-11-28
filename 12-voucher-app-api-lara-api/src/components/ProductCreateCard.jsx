/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { tailspin } from 'ldrs'
import toast from 'react-hot-toast'


tailspin.register()

const ProductCreateCard = () => {

    const { register, handleSubmit, formState: { errors } , reset} = useForm({});
    const [ Sending, setSending ] = useState(false);
    const navigate = useNavigate();
    const handelUpdateProduct = async (data) => {
        // console.log(data);
        setSending(true);
        await fetch(import.meta.env.VITE_API_URL + "/products", {
            method: "POST",
            body: JSON.stringify({product_name: data.product_name, price: data.price, created_at: new Date().toISOString()}),
            headers: {
                "Content-Type": "application/json",
            }
        })
        setSending(false);
        reset();
        if(data.back_to_product_list){
            navigate("/product");
        }
        toast.success("Product create successfully");

        // console.log(data.product_name);
        // console.log(data.price);

    }
    return (
        <>
            <div className='p-2 w-full md:w-1/2'>
                <h1 className='text-2xl font-bold mb-1'>Create New Product</h1>
                <p className='mb-4 text-stone-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita error consequatur alias doloremque!</p>

                <form onSubmit={handleSubmit(handelUpdateProduct)}>
                    <div>
                        <label
                            htmlFor="first_name"
                            className={`block mb-2 text-sm font-medium ${errors.product_name ? "text-red-500" : "text-gray-900"
                                } dark:text-white`}
                        >
                            New Product Name
                        </label>
                        <input type="text" {...register("product_name",
                            {
                                required: true,
                                minLength: 3,
                                maxLength: 30
                            })}
                            id="first_name" className={`bg-gray-50 border ${errors.product_name
                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                } text-gray-900 text-xs rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3`}
                            placeholder="eg. apple" />

                        {errors.product_name?.type === "required" && (
                            <p className='text-red-500 text-xs'>Product name is required</p>
                        )}
                        {errors.product_name?.type === "minlength" && (
                            <p className='text-red-500 text-xs'>Product name must be at least 3 characters</p>
                        )}
                        {errors.product_name?.type === "maxlength" && (
                            <p className='text-red-500 text-xs'>Product name must be at most 10 characters</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
                        <input type="number" {...register("price",
                            {
                                required: true,
                                min: 500,
                                max: 100000
                            }
                        )

                        }
                            className={`bg-gray-50 border ${errors.price
                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                } text-gray-900 text-xs rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            placeholder="eg. 500"
                        />
                        {errors.price?.type === "required" && (
                            <p className=" text-red-500 text-xs mt-1">
                                Product price is required
                            </p>
                        )}
                        {errors.price?.type === "min" && (
                            <p className=" text-red-500 text-xs mt-1">
                                Product price must be greater than 100 characters
                            </p>
                        )}
                        {errors.price?.type === "max" && (
                            <p className=" text-red-500 text-xs mt-1">
                                Product price must be less than 10000 characters
                            </p>
                        )}
                    </div>

                    <div className="flex items-center mb-4 mt-4">
                        <input
                            {...register("all_correct")}
                            required
                            id="all-correct"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="all-correct"
                            className="ms-3 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                            Make sure all field are correct
                        </label>
                    </div>

                    <div className="flex items-center mb-4 mt-4">
                        <input
                            {...register("back_to_product_list")}
                            id="back_to_product_list"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="back_to_product_list"
                            className="ms-3 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                            Back to product list after saving
                        </label>
                    </div>


                    <Link to={"/product"} type="button" className="py-2.5 px-5 me-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</Link>

                    <button type="submit" className="text-white inline-flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <span>Save Product</span>
                        {Sending && <l-tailspin
                            size="20"
                            stroke="3"
                            speed="0.9"
                            color="white"
                        ></l-tailspin>}
                        
                    </button>
                </form>

            </div>

        </>
    )
}

export default ProductCreateCard;
