import React, { useState } from 'react'
import Create from "./Create";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { BASE_URL, GET_POSTS, STORE_POST } from "../constant/api";
import PostCard from "../components/PostCard";


const Home = () => {
  const [editPost, setEditPost] = useState({});
  const query = useQuery('posts', () => axios.get(BASE_URL + GET_POSTS));
  const Edit = (post) => {
    setEditPost(post);
  }

  return (
    <div className="p-20">
      <div className="flex flex-col gap-3 my-10">
        {
          query?.data?.data?.posts?.map(post => (
            <PostCard setEditPost={setEditPost} post={post} key={post.id} />
          ))
        }
      </div>
      <Create setEditPost={setEditPost} post={editPost} />
    </div>
  )
}

export default Home;