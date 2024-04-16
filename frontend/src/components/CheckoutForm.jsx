// CheckoutForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CheckoutForm = ({ onSubmit }) => {
  const initialValues = {
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    shippingAddress: {
      address: '',
      city: '',
      postalCode: '',
    },
    billingAddress: {
      address: '',
      city: '',
      postalCode: '',
    },
    paymentInfo: {
      paymentMethod: '',
      cardNumber: '',
      expirationDate: '',
      cvv:'',
    },
    discountCode: '',
    
  };

  const validationSchema = Yup.object({
    customerInfo: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phoneNumber: Yup.string().required('Phone number is required'),
    }),
    shippingAddress: Yup.object({
      address: Yup.string().required('Shipping address is required'),
      city: Yup.string().required('City is required'),
      postalCode: Yup.string().required('Postal code is required'),
    }),
    billingAddress: Yup.object({
      address: Yup.string().required('Billing address is required'),
      city: Yup.string().required('City is required'),
      postalCode: Yup.string().required('Postal code is required'),
    }),
    paymentInfo: Yup.object({
      paymentMethod: Yup.string().required('Payment method is required'),
      cardNumber: Yup.string().required('Card number is required'),
      expirationDate: Yup.string().required('Expiration date is required'),
      cvv: Yup.string()
        .matches(/^[0-9]{3,4}$/, 'Invalid CVV') 
        .required('CVV is required'),
    }),
    discountCode: Yup.string(),
   
  });

  const handleSubmit = (values, { setSubmitting }) => {
    onSubmit(values); 
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className=" max-w-4xl mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">Billing Address Details</h2>
        <div className="">
          <div className="flex gap-4">
          <div className="mb-4 w-full">
            <label htmlFor="customerInfo.firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <Field
              type="text"
              id="customerInfo.firstName"
              name="customerInfo.firstName"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="customerInfo.firstName" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="customerInfo.lastName" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <Field
              type="text"
              id="customerInfo.lastName"
              name="customerInfo.lastName"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="customerInfo.lastName" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          </div>

          <div className="mb-4">
            <label htmlFor="customerInfo.email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <Field
              type="text"
              id="customerInfo.email"
              name="customerInfo.email"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="customerInfo.email" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="customerInfo.phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <Field
              type="text"
              id="customerInfo.phoneNumber"
              name="customerInfo.phoneNumber"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="customerInfo.phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4 mt-8">Payment Method</h2>
          <div className="mb-4">
            <label htmlFor="paymentInfo.paymentMethod" className="block text-sm font-medium text-gray-600">
              Payment Method
            </label>
            <Field
              as="select"
              id="paymentInfo.paymentMethod"
              name="paymentInfo.paymentMethod"
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="" label="Select a payment method" />
              <option value="creditCard" label="Credit Card" />
              <option value="paypal" label="PayPal" />
             
            </Field>
            <ErrorMessage
              name="paymentInfo.paymentMethod"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="paymentInfo.cardNumber" className="block text-sm font-medium text-gray-600">
              Card Number
            </label>
            <Field
              type="text"
              id="paymentInfo.cardNumber"
              name="paymentInfo.cardNumber"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="paymentInfo.cardNumber" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="paymentInfo.expirationDate" className="block text-sm font-medium text-gray-600">
              Expiration Date
            </label>
            <Field
              type="text"
              id="paymentInfo.expirationDate"
              name="paymentInfo.expirationDate"
              placeholder="MM/YYYY"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="paymentInfo.expirationDate"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
          <label htmlFor="paymentInfo.cvv" className="block text-sm font-medium text-gray-600">
              CVV
            </label>
            <Field
              type="text"
              id="paymentInfo.cvv"
              name="paymentInfo.cvv"
              placeholder="123" 
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="paymentInfo.cvv" component="div" className="text-red-500 text-sm mt-1" />
          </div>
        </div>
        <button
          type="submit"
          className="bg-dark-blue text-white px-4 py-2 rounded-md  focus:outline-none  mt-8"
        >
          Complete Checkout and Pay
        </button>
      </Form>
    </Formik>
  );
};

export default CheckoutForm;