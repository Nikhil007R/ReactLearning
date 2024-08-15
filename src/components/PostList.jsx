import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";
import Message from "./Message";
import Loader from "./Loader";

function PostList(){

    const {postList, addPosts} = useContext(PostListData);
    const [fetching, setFetching] = useState(false);
    
        useEffect(()=>{
            setFetching(true)

            const controller = new AbortController();
            const signal = controller.signal;

            fetch('https://dummyjson.com/posts', {signal})
            .then(res => res.json())
            .then(data => {
                addPosts(data.posts)
                setFetching(false)
            });

            return()=>{
                console.log("Cleaning up useEffect: ");
                controller.abort();
            }
        }, [])

    // i wanted to run this when our app component renders 
    // const handleOnClickPosts = ()=>{
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then(data => {
    //         addPosts(data.posts)
    //     });
    // }

    // console.log(postList)
    return (
        <>  
            {fetching && <Loader/>}
            {/* when i am passing message as onlclick  */}
            {/* {postList.length === 0 && <Message onClickPostsServer={handleOnClickPosts}/>} */}
            {!fetching && postList.length === 0 && <Message/>}
            {!fetching && postList.map((item)=> (<Post key={item.id} post={item}/>))}
            {/* <Post/> */}
        </>
    )
}

export default PostList;