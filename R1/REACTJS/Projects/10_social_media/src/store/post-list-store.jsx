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

  const [postList, dispatchPostList] = useReducer(postListReducer, []);

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

const DEFAULT_POST_LIST = [{
    id: '1',
    title: 'Going to UK',
    body: 'Hi Friends, I am going to UK for my vacation. Hope to enjoy a lot. Peace out.',
    reactions: 0,
    userId: '',
    tags: ['vacation', 'UK', 'Enjoying']
}]

export default PostListProvider;
