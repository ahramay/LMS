const PaymentConfirmation = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-screen-lg my-0 mx-auto pb-10">
        <div className="flex justify-evenly gap-5">
          <div className="bg-white  h-40 w-full rounded-lg cursor-pointer shadow-md  ">
            <div className="text-lg p-2 font-bold  text-center ">
              Billing Address
            </div>
            <h2 className="text-left p-4 pb-0">Name : </h2>
            <div className="text-sm text-left p-4  max-w-xs">
              Lorem, ipsum. Lorem, ipsum dolor. Lorem ipsum dolor sit.
            </div>
          </div>
          <div className="bg-white h-40 w-full text-center rounded-lg cursor-pointer shadow-md ">
            <div className="text-lg p-2 font-bold">Payment Information</div>
            <div className="text-lg text-left p-4">Payment type : lorem</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-8  shadow-md   w-8/12 my-0 mx-auto text-center rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Payment Confirmation</h1>
        <p className="mb-6">Payment Method</p>
        <div className="mb-6">
          <strong>Order ID:</strong> #123456
        </div>
        <div className="mb-6">
          <strong>Amount:</strong> $50.00
        </div>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
        <button className="bg-theme-green text-xl  text-white  px-4  py-2 mt-4  rounded-full hover:bg-dark-blue">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
