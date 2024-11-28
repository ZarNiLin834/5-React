/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SaleForm from './SaleForm';
import VoucherTable from './VoucherTable';
import useRecordStore from '../../store/useRecordStore';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const VoucherInfo = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const navigate = useNavigate();
    const [isSending, setIsSending] = useState(false);
    const { records, resetRecord } = useRecordStore();

    const onSubmit = async (data) => {
        setIsSending(true);
        console.log(data);

         const total = records.reduce((a, b) => a + b.cost, 0);
        const tax = total * 0.05;
        const net_total = total + tax;

        const currentVoucher = ({ voucher_id: data.voucher_id, customer_name: data.customer_name, customer_email: data.customer_email, sale_date: data.sale_date, all_correct: data.all_correct, records, total, tax,net_total});

        console.log("currentVoucher", currentVoucher);
        console.log(records);

        const res = await fetch(import.meta.env.VITE_API_URL + '/vouchers', {
            method: 'POST',
            body: JSON.stringify(currentVoucher),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const json = await res.json();
        // console.log(import.meta.env.VITE_API_URL + '/vouchers');
        toast.success('Voucher created successfully');

        // console.log("json",json);
        // console.log("res", res);

        resetRecord();
        reset();
        setIsSending(false);

        if (data.redirect_to_detail) {
            navigate(`/voucher/detail/${json.voucher.id}`);
            console.log(json       
            );
        }
    }

    function generateInvoiceNumber() {
        // Get the current date
        const date = new Date();

        // Format the date as YYYYMMDD
        const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

        // Generate a random number between 1000 and 9999
        const randomNumber = Math.floor(1000 + Math.random() * 9000);

        // Combine the formatted date and the random number
        const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;

        return invoiceNumber;
    }
    //   console.log(generateInvoiceNumber());
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <SaleForm />
                    <VoucherTable />
                </div>
                <div className="col-span-1">
                    <form id='info_form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 h-full">
                            <div className='col-span-1'>
                                <label
                                    className={`block mb-2 text-sm font-medium ${errors.voucher_id ? "text-red-500" : "text-gray-900"
                                        } dark:text-white`}
                                >
                                    Voucher ID
                                </label>
                                <input type="text"
                                    defaultValue={generateInvoiceNumber()}
                                    {...register("voucher_id",
                                        {
                                            required: true,
                                            minLength: 3,
                                            maxLength: 30
                                        })}
                                    className={`bg-gray-50 border ${errors.voucher_id
                                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        } text-gray-900 text-xs rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3`}
                                />

                                {errors.voucher_id?.type === "required" && (
                                    <p className='text-red-500 text-xs'>Voucher ID is required</p>
                                )}

                            </div>

                            <div className='col-span-1'>
                                <label
                                    className={`block mb-2 text-sm font-medium ${errors.customer_name ? "text-red-500" : "text-gray-900"
                                        } dark:text-white`}
                                >
                                    Customer Name
                                </label>
                                <input type="text" {...register("customer_name",
                                    {
                                        required: true,
                                        minLength: 3,
                                        maxLength: 30
                                    })}
                                    id="first_name" className={`bg-gray-50 border ${errors.customer_name
                                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        } text-gray-900 text-xs rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3`}
                                />

                                {errors.customer_name?.type === "required" && (
                                    <p className='text-red-500 text-sm'>Customer name is required</p>
                                )}

                            </div>

                            <div className='col-span-1'>
                                <label
                                    className={`block mb-2 text-sm font-medium ${errors.customer_email ? "text-red-500" : "text-gray-900"
                                        } dark:text-white`}
                                >
                                    Customer Email
                                </label>
                                <input type="text" {...register("customer_email",
                                    {
                                        required: true,
                                        minLength: 3,
                                        maxLength: 30
                                    })}
                                    id="first_name" className={`bg-gray-50 border ${errors.customer_email
                                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        } text-gray-900 text-xs rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3`}
                                />

                                {errors.customer_email?.type === "required" && (
                                    <p className='text-red-500 text-xs'>Customer email is required</p>
                                )}

                            </div>

                            <div className='col-span-1'>
                                <label
                                    className={`block mb-2 text-sm font-sm ${errors.product_name ? "text-red-500" : "text-gray-900"
                                        } dark:text-white`}
                                >
                                    Sale Date
                                </label>
                                <input type="date"
                                    defaultValue={new Date().toISOString().slice(0, 10)}
                                    {...register("sale_date",
                                        {
                                            required: true,
                                            minLength: 3,
                                            maxLength: 30
                                        })}
                                    id="first_name" className={`bg-gray-50 border ${errors.sale_date
                                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        } text-gray-900 text-xs rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3`}
                                />

                                {errors.sale_date?.type === "required" && (
                                    <p className='text-red-500 text-xs'>Sale date is required</p>
                                )}

                                <div className="flex flex-col justify-end items-end gap-3 mt-auto">
                                    <div className="flex items-center mb-2 mt-4">
                                        <label
                                            htmlFor="all-correct"
                                            className="mr-3 text-xs font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Make sure all field are correct
                                        </label>
                                        <input
                                            {...register("all_correct")}
                                            form='myForm'
                                            id="all-correct"
                                            type="checkbox"
                                            value=""
                                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                    </div>

                                    <div className="flex items-center mb-2 mt-auto">
                                        <label
                                            htmlFor="redirect-to-detail"
                                            className="mr-3 text-xs font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Redirect to voucher Detail
                                        </label>
                                        <input
                                            {...register("redirect_to_detail")}
                                            form='myForm'
                                            id="redirect-to-detail"
                                            type="checkbox"
                                            value=""
                                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                    </div>

                                    <button form='info_form' type="submit" className="text-white inline-flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-3 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <span> Confirm Voucher</span>
                                        {isSending && <l-tailspin
                                            size="20"
                                            stroke="3"
                                            speed="0.9"
                                            color="white"
                                        ></l-tailspin >}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default VoucherInfo
