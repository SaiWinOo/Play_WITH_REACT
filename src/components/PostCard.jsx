import axios from "axios";
import React from 'react'
import { useMutation, useQueryClient } from "react-query";
import { BASE_URL, DELETE_POST } from "../constant/api";

const deletePost = (id) => {
  return axios.delete(BASE_URL + DELETE_POST + id);
}
const PostCard = ({ post, setEditPost }) => {

  const queryClient = useQueryClient();

  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  })

  const handleDelete = (id) => {
    mutation.mutate(id)
  }

  return (
    <div className="p-5 shadow-md hover:shadow-xl ">
      <h4 className="font-semibold text-xl hover:underline cursor-pointer">{post.title}</h4>
      <p>{post.body.substr(0, 200) + '...'}</p>
      <div className="flex gap-2">
        <button onClick={() => setEditPost(post)}>Edit</button>
        <button onClick={() => handleDelete(post.id)} className="bg-rose-500">Delete</button>
      </div>
    </div>
  )
}

export default PostCard;