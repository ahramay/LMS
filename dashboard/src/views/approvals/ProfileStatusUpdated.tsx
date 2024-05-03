
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import appConfig from '@/configs/app.config';
import { PERSIST_STORE_NAME } from '@/constants/app.constant';
import deepParseJson from '@/utils/deepParseJson';
import Notification from '@/components/ui/Notification';
import { Button, FormContainer, FormItem } from '@/components/ui';
import toast from '@/components/ui/toast'


const ProfileStatusUpdated = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state;
  const userId = user._id;
  console.log("id>>>>>>", userId);

  const onComplete = async (values: any, setSubmitting: any) => {
    setSubmitting(true);
    try {
      const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME);
      const persistData = deepParseJson(rawPersistData);
      const accessToken = (persistData as any).auth.session.token
      // console.log("token>>>", accessToken);
      const baseUrl = `${appConfig.baseUrl}/${appConfig.apiPrefix}`;
      const response = await axios.patch(`${baseUrl}/auth/profilePicStatus/${userId}`, {
        profilePicStatus: values.profilePicStatus,
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
        },
      });
      
      if (response.data.status) {
        toast.push(
          <Notification
              title={` status updated successfully! `}
              type="success"
          />,
          {
              placement: 'top-center',
          }
      )
        navigate('/profile-picture/list');
  
        
      }
    } catch (error) {
    }
    setSubmitting(false);
  };
  

  return (
    <div>
      <div className='bg-[#F5F5F5] py-[17px] w-[64%] text-center rounded-[10px]'>
        <h2 className='text-[#444444]'>Profile Approval</h2>
      </div>
      <div className='flex flex-col md:flex-row gap-[10px] mt-[15px]'>
        <div className='bg-[#F5F5F5] py-[40px] px-[20px] rounded-[10px] flex-[2] border-[1px] flex flex-col items-center'>
          <img className='w-[120px] h-[120px] rounded-[50%] mb-[10px]' src={user.profilePic} alt="" />
          <p className='text-[16px] text-[#444444] font-[700]'>{user.firstName} {user.lastName}</p>
          <p className='text-[14px] font-[600]'>{user.email}</p>
        </div>
        <div className='flex-[3] ml-[5px]'>
          <Formik
            initialValues={{ profilePicStatus: user.profilePicStatus }}
            onSubmit={(values, { setSubmitting }) => {
              onComplete(values, setSubmitting);
            }}
          >
            <Form>
              <FormContainer>
                <FormItem label='Update Status' className='text-[22px] text-[#444444] font-[800] px-[10px] py-[10px] bg-[#F5F5F5] rounded-[10px]'>
                  <Field as="select" name="profilePicStatus" className="text-[16px] font-[600] text-[#444444] pl-[6px] pr-[30px] py-[8px] border-[3px] rounded-[8px] border-[#6366F1] focus:outline-none">
                    {/* <option value="">Select Status</option> */}
                    <option value="approved" className='text-green-500 text-[17px] font-[600]' >Approved</option>
                    <option value="pending" className='text-yellow-500 text-[17px] font-[600]'>Pending</option>
                    <option value="rejected" className='text-red-500 text-[17px] font-[600]'>Rejected</option>
                  </Field>
                </FormItem>
                <div className="mt-[-10px]">
                  <Button variant="solid" type="submit">Update</Button>
                </div>
              </FormContainer>
            </Form>
          </Formik>
        </div>
        <div className='flex-[3]'></div>
      </div>
    </div>
  );
};

export default ProfileStatusUpdated;





































































