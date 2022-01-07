import React from 'react'
import { TextArea } from './textArea'

const FormikControl = (props) => {
  const {control, ...rest} = props
  switch (control) {
    case 'textarea': return <TextArea {...rest} />
    default:
      return null
  }
};

export default FormikControl;