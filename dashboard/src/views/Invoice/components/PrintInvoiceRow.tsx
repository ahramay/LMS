import { useEffect, useState } from "react";

interface PrintInvoiceRowProps {
    data: any; 
    lastIndex: any; 
}

const PrintInvoiceRow: React.FC<PrintInvoiceRowProps> = ({data, lastIndex}) => {
    const [lastRow, setLastRow] = useState<boolean>(false);

    useEffect(() => {
        if(data && lastIndex){
            if(data === lastIndex){
                setLastRow(true);
            }
        }
    }, [lastRow, data, lastIndex]);
   
    return (
       <>
         <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 ">
            <div className="col-span-full sm:col-span-2">
                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                    Item
                </h5>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                    Lorem, ipsum.
                </p>
            </div>
            <div>
                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                    Qty
                </h5>
                <p className="text-gray-800 dark:text-gray-200">
                    4
                </p>
            </div>
            <div>
                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                    Rate
                </h5>
                <p className="text-gray-800 dark:text-gray-200">
                    $10
                </p>
            </div>
            <div>
                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                    Amount
                </h5>
                <p className="sm:text-end text-gray-800 dark:text-gray-200">
                    $40
                </p>
            </div>
        </div>
        <div className={` ${lastRow ? 'hidden' :'sm:block'} border-b border-gray-200 dark:border-gray-700`}></div>
       </>
    );
}

export default PrintInvoiceRow;
