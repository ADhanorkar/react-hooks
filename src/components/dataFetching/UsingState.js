import axios from "axios";
import React, { useState, useEffect } from "react";

const UsingState = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </>
      )}
      {error && error}
    </div>
  );
};

export default UsingState;
