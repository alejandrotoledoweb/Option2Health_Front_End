import React from 'react';
import { Field } from 'formik';

export const TextArea = (props) => {
  const { label, name, span, ...rest } = props

  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className='my-2 px-2'>{label}</label>
      <Field as='textarea' id={name} name={name} {...rest} className='form-control bg-gray-200 mx-2 my-2 py-4 px-2'/>
    </div>
  )
}