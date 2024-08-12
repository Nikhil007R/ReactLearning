import { useContext } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";

function PostList(){

    const {postList} = useContext(PostListData);
    // console.log(postList)

    return (
        <>  
            {postList.length === 0? <p className="postMessage">No Post right now!! <span style={{color: "red", textDecoration: "underline"}}>Create Post</span></p> : postList.map((item)=> (<Post key={item.id} post={item}/>))}
            {/* <Post/> */}
        </>
    )
}

export default PostList;