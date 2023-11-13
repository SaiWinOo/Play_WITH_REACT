import React, { memo, useEffect } from 'react'

const Input = ({ type = 'text', sendMessage }) => {

  console.log('input render');

  useEffect(() => {
    console.log('send message change');
  }, [sendMessage]);

  return (
    <input type={type} />
  )
}


export default memo(Input);