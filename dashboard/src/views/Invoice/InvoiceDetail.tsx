import axios from "axios";

import { GrDocumentDownload } from "react-icons/gr";
import { IoMdPrint } from "react-icons/io";
import { MdOutlineCopyright } from "react-icons/md";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PrintInvoiceRow from "./components/PrintInvoiceRow"

const InvoiceDetail = () => {
    const[invoiceData,SetInvoiceData]=useState();
    const query=useParams();
    let currentYear=new Date().getFullYear();
    let dummyDataArray =[7,4,6];
    let lastIndex=dummyDataArray.length -1;

    // const fetchDataFromApi = async()=>{
    //     try {
    //         const {data}= await axios.get('/yourApicallEndpoint');
    //         SetInvoiceData(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(()=>{
    //     fetchDataFromApi();
    // },[query])

    return (
        <div  className="bg-gray-50 dark:bg-slate-900">
                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
                    <div className="sm:w-11/12 lg:w-3/4 mx-auto">
                        <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-800">
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="mt-2 text-lg md:text-xl font-semibold text-blue-600 dark:text-white">
                                        HSMA
                                    </h1>
                                </div>
                                <div className="text-end">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                                        Invoice #
                                    </h2>
                                    <span className="mt-1 block text-gray-500">
                                        12345
                                    </span>
                                    <address className="mt-4 not-italic text-gray-800 dark:text-gray-200">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </address>
                                </div>
                            </div>
                            <div className="mt-8 grid sm:grid-cols-2 gap-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        Bill to:
                                    </h3>
                                    <h3 className="text-lg font-semibold capitalize text-gray-800 dark:text-gray-200">
                                        user name
                                    </h3>
                                    <address className="mt-2 not-italic text-gray-500">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Cumque.
                                    </address>
                                </div>

                                <div className="sm:text-end space-y-2">
                                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                        <dl className="grid sm:grid-cols-5 gap-x-3">
                                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                                                Invoice date:
                                            </dt>
                                            <dd className="col-span-2 text-gray-500">
                                                01/01/2024
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                                    <div className="hidden sm:grid sm:grid-cols-5">
                                        <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
                                            Item
                                        </div>
                                        <div className="text-start text-xs font-medium text-gray-500 uppercase">
                                            Qty
                                        </div>
                                        <div className="text-start text-xs font-medium text-gray-500 uppercase">
                                            Rate
                                        </div>
                                        <div className="text-end text-xs font-medium text-gray-500 uppercase">
                                            Amount
                                        </div>
                                    </div>

                                    <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>
                                    {
                                        
                                        dummyDataArray.map((_,index)=><PrintInvoiceRow key={index} data={index} lastIndex={lastIndex}/>)
                                    }
                                </div>
                            </div>

                            <div className="mt-8 flex sm:justify-end">
                                <div className="w-full max-w-2xl sm:text-end space-y-2">
                                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                        <dl className="grid sm:grid-cols-5 gap-x-3">
                                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                                                Subtotal:
                                            </dt>
                                            <dd className="col-span-2 text-gray-500">
                                                $120.00
                                            </dd>
                                        </dl>
                                        <dl className="grid sm:grid-cols-5 gap-x-3">
                                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                                                Tax:
                                            </dt>
                                            <dd className="col-span-2 text-gray-500">
                                                $10.00
                                            </dd>
                                        </dl>

                                        <dl className="grid sm:grid-cols-5 gap-x-3">
                                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                                                Total:
                                            </dt>
                                            <dd className="col-span-2 text-gray-500">
                                                $130.00
                                            </dd>
                                        </dl>


                                        <dl className="grid sm:grid-cols-5 gap-x-3">
                                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                                                Amount paid:
                                            </dt>
                                            <dd className="col-span-2 text-gray-500">
                                                $130.00
                                            </dd>
                                        </dl>

                                        <dl className="grid sm:grid-cols-5 gap-x-3">
                                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                                                Due balance:
                                            </dt>
                                            <dd className="col-span-2 text-gray-500">
                                                $0.00
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 sm:mt-12">
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    Thank you!
                                </h4>
                                <p className="text-gray-500">
                                   Lorem ipsum, dolor sit amet consectetur 
                                   adipisicing elit. Cum fugit quam vel 
                                   recusandae esse natus?
                                </p>
                                <div className="mt-2">
                                    <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                                        test@gmail.com
                                    </p>
                                    <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                                        012-345-6789
                                    </p>
                                </div>
                            </div>

                            <p className="mt-5 text-sm text-gray-500 uppercase flex gap-1">
                                <MdOutlineCopyright size={20}/> {currentYear} hsma.
                            </p>
                        </div>

                        <div className="mt-6 flex justify-end gap-x-3">
                            <button
                                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                            >
                                <GrDocumentDownload size={20}/>
                                Invoice PDF
                            </button>
                            <button
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                                <IoMdPrint size={20}/>
                                Print
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default InvoiceDetail
