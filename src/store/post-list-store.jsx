import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const default_post_list = [];

const postListReducer = (currPostList, action) => {
    // Currently not handling any actions

    let newPostList = currPostList;
    
    if(action.type === "DELETE_POST"){
        newPostList = currPostList.filter((item)=> item.id !== action.payload.postId);
    }
    else if(action.type === "ADD_POST"){
        newPostList = [action.payload, ...currPostList]
    }

    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, default_post_list);

    const addPost = (username, postTitle, postContent, reaction, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postContent,
                reactions: reaction,
                userId: username,
                tags: tags,
            }
        })

    };

    const deletePost = (postId) => {
        
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId: postId
            }
        })

    };

    return (
        <PostList.Provider value={{ postList: postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;
