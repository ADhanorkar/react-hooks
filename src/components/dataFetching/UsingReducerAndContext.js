import React, { useEffect, useReducer } from "react";
import PostReducer from "./PostReducer";
import PostState from "./PostState";
import axios from "axios";

const UsingReducerAndContext = () => {
  const [{ loading, post, error }, dispatch] = useReducer(
    PostReducer,
    PostState
  );

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <>
      <div>Using Reducer</div>
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
    </>
  );
};

export default UsingReducerAndContext;
