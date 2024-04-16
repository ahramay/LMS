import useFetch from "../hooks/useFetch";
import OrderCart from "../components/OrderCart";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import SubDetails from "../components/SubDetails";

const Order = () => {
  const { data, loading } = useFetch('/api/order/all');

 

  const number=1;

  return (
    <div className="  max-w-screen-xl mx-auto py-4">
       <h3 className="mb-4 text-xl font-bold">Order History</h3>
       <div className="flex justify-between  py-4">
      <table className="w-11/12 pr-4">
        <thead >
          <tr className="flex py-4 px-4 bg-dark text-white text-lg">
          <th className="w-1/3">No</th>
          <th className="w-1/3">Order number</th>
          <th className="w-1/3">Date placed</th>
          <th className="w-1/3">Items</th>
          <th className="w-1/3">Paid</th>
          <th className="w-1/3">Total Amount</th>
          <th className="w-1/3">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
        {loading ? (
            <tr>
              <td colSpan="3"><Skeleton count={4} /></td>
            </tr>
          ) : (
            data?.orders && data?.orders.map((orderItem,index) => (
              <SubDetails data={orderItem} key={orderItem?._id} index={index}  />
            ))
          )}
          </tbody>
        {/* <div className="mt-4">
          <p>Subtotal: </p>
          <p>Total: </p>
          <p>Discount: </p>
          <p>Total Payable:</p>
        </div> */}
      </table>

      <div className="w-2/6 pl-4">
        <div className="mb-4">
          <p>Customer Name: </p>
          <img src="{/* Image URL */}" alt="Customer" className="w-16 h-16 rounded-full" />
          <p>Shipping Address: </p>
          <p>Email Address: </p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
      </div>
      </div>
    </div>
  );
};

export default Order;
