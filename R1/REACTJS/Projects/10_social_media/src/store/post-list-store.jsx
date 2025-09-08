const { createContext, useReducer } = require("react");

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = () => {};

  const deletePost = () => {};

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to UK",
    body: "Hi Friends, I am going to UK for my vacation. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-1",
    tags: ["vacation", "UK", "Enjoying"],
  },
   {
    id: "2",
    title: "Passed",
    body: "After a lot of hard work finally we are passed in B.tech exam.",
    reactions: 15,
    userId: "user-2",
    tags: ["Graduation", "Passed", "Education"],
  },
];

export default PostListProvider;
