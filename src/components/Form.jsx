import React from 'react'
import { useForm } from "react-hook-form";

const Form = () => {


  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <input {...register('name')} />
      <input {...register('email')} />
      <input {...register('password')} />
      <button type='submit' className='bg-green-500'>Submit</button>
    </form>
  )
}

export default Form;