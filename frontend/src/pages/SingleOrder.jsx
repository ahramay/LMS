import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import OrderCart from '../components/OrderCart';

const SingleOrder = () => {
    const query = useParams();
    const {data,loading}=useFetch(`/api/order/${query?.id}`);
    const items = data?.order?.items
  return (
    <div>
        SingleOrder
        {!!data?.order?.items && data?.order?.items?.map((item)=>
          <OrderCart items={item?.course}/>
        ) }
    </div>
  )
}

export default SingleOrder