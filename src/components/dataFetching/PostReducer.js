const PostReducer = (currentState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, post: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, post: {}, error: "Something went wrong" };
    default:
      return currentState;
  }
};

export default PostReducer;
