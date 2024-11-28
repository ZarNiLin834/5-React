/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useSWRConfig } from 'swr'
import { dotPulse } from 'ldrs'
import toast from 'react-hot-toast'
import ShowDate from './ShowDate'

dotPulse.register()


const ProductRow = ({ product: { id, product_name, price, created_at, updated_at } }) => {

    const { mutate } = useSWRConfig();
    const [isDeleting, setIsDeleting] = useState(false);
    const date = new Date(created_at);
    const currentDate = date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const currentTime = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    });

    const handelDeleteBtn = async () => {
        const res = await fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
            method: "DELETE",
        });
        const json = await res.json();
        if (res.status === 200) {
            toast.success("json.message");
            mutate(import.meta.env.VITE_API_URL + `/products`);
            // console.log(id);
            setIsDeleting(true);
        } else {
            toast.error("json.message");
        }
    };

    return (
        <tr className="odd:bg-white text-xs odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td className="px-6 py-3">{id}</td>
            <th
                scope="row"
                className="px-6 py-3 font-medium text-stone-900 whitespace-nowrap dark:text-white"
            >
                {product_name}
            </th>
            <td className="px-6 py-4 text-end">{price}</td>
            <td className="px-6 py-4 text-end">
                <ShowDate timestamp={created_at} />
            </td>
            <td className="px-6 py-4 text-end">
                <ShowDate timestamp={updated_at} />
            </td>
            <td className="px-6 py-3 text-end">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <Link
                        to={`/product/edit/${id}`}
                        className="size-8 flex justify-center items-center text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        <HiOutlinePencil />
                    </Link>

                    <button
                        type="button"
                        onClick={handelDeleteBtn}
                        className="size-8 flex justify-center items-center text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >

                        {isDeleting ? (
                            <l-dot-pulse
                                size="30"
                                speed="1.3"
                                color="red"
                            ></l-dot-pulse>
                        ) : (
                            <HiOutlineTrash />
                        )}
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default ProductRow
