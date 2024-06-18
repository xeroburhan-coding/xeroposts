import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { TailSpin } from 'react-loader-spinner';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <Navbar />
      {!post ? (
        <div className="flex justify-center items-center h-screen">
          <TailSpin
            height="80"
            width="80"
            color="#3498db"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <div className="container mx-auto py-10 px-5">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
              <p className="text-gray-700">{post.body}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
