import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState(20);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const loadMorePosts = () => {
    setDisplayedPosts((prev) => prev + 20);
  };

  return (
    <div>
      <Navbar />
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
              {posts.slice(0, displayedPosts).map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              {displayedPosts < posts.length ? (
                <button
                  onClick={loadMorePosts}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Show More
                </button>
              ) : (
                <p>All posts loaded</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Posts;
