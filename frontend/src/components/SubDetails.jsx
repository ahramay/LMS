import { useNavigate } from "react-router-dom";

const SubDetails = ({ data, index }) => {
  const navigation = useNavigate();
  const utcDateTimeString = data?.createdAt;
  const utcDateTime = new Date(utcDateTimeString);
  const localDateTimeString = utcDateTime.toLocaleString();

  const dateAndTime = localDateTimeString.split(",");
  const handleClick = () => {
    navigation(`/orderdetails/${data?._id}`);
  };

  return (
    <tr
      onClick={handleClick}
      className="flex p-4 cursor-pointer bg-light-gray hover:bg-gray-300 justify-center items-center rounded"
    >
      <td className="w-1/3">{index + 1}</td>
      <td className="w-1/3">{data?._id}</td>
      <td className="w-1/3">{dateAndTime[0]}</td>
      <td className="w-1/3">{data?.items.length}</td>
      <td className="w-1/3">{data?.paymentStatus}</td>
      <td className="w-1/3">{data?.totalAmount}</td>
      <td className="w-1/3">
        <button className="bg-blue-500 text-white px-4 py-2  rounded">
          View
        </button>
      </td>
    </tr>
  );
};

export default SubDetails;
