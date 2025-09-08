const { createContext, useReducer } = require("react");

const DEFAULT_CONTEXT = {
    postList: [],
    addPost: () => {},
    deletePost: () => {},
}
const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
    return currPostList
}

const PostListProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, )


    const addPost = () => {

    }

    const deletePost = () => {

    }
    return <PostList.Provider value={{
        postList: postList, addPost: addPost, deletePost: deletePost
    }}>{children}</PostList.Provider>

}

export default PostListProvider