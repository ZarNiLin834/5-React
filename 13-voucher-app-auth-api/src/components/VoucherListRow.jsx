/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from 'react';
import { HiOutlineArrowLongRight, HiOutlineTrash } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { useSWRConfig } from 'swr';
import ShowDate from './ShowDate';
import toast from 'react-hot-toast';

const VoucherListRow = ({ voucher: { id, voucher_id, customer_name, customer_email, created_at } }) => {
    const { mutate } = useSWRConfig();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDeleteBtn = async () => {
        setIsDeleting(true);

        await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
            method: "DELETE",
        });
        toast.success("Voucher deleted successfully");
        mutate(import.meta.env.VITE_API_URL + `/vouchers`);
    };
    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td className="px-6 py-4 text-xs">{voucher_id}</td>
            <th
                scope="row"
                className="px-6 py-4 text-xs text-stone-900 whitespace-nowrap dark:text-white"
            >
                {customer_name}
            </th>
            <td className="px-6 py-4 text-xs text-end">{customer_email}</td>
            <td className="px-6 py-4 text-xs text-end">
                <ShowDate timestamp={created_at} />

            </td>
            <td className="px-6 py-4 text-end">
                <div className="inline-flex  rounded-md shadow-xs" role="group">

                    <button
                        type="button"
                        onClick={handleDeleteBtn}
                        className="size-8 flex justify-center items-center text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        {isDeleting ? (
                            <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
                        ) : (
                            <HiOutlineTrash />
                        )}

                    </button>
                    <Link
                        to={`/voucher/detail/${id}`}
                        className="size-8 flex justify-center items-center text-sm font-medium  bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                        <HiOutlineArrowLongRight />
                    </Link>
                </div>
            </td>
        </tr>

    );
}

export default VoucherListRow
