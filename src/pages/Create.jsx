import axios from "axios";
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { BASE_URL, STORE_POST, UPDATE_POST } from "../constant/api";

const storePost = (data) => {
  return axios.post(BASE_URL + STORE_POST, data);
}
const updatePost = (data) => {
  return axios.put(BASE_URL + UPDATE_POST + data.id, data);
}

const Create = ({ post, setEditPost }) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, setValue } = useForm({});

  const store = useMutation(storePost, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      reset();
    }
  });

  const update = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      reset();
      setEditPost({})
    }
  });

  const submitHandler = (data) => {
    if (post?.title) {
      update.mutate(data);
    } else {
      store.mutate(data);
    }
  }

  useEffect(() => {
    console.log(post);
    if (post?.title && post?.body) {
      setValue('title', post.title);
      setValue('body', post.body);
      setValue('id', post.id);
    }
  }, [post])

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-3">
      <input {...register('title')} />
      <textarea {...register('body')} rows={10}></textarea>
      <button>{post?.title ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default Create;