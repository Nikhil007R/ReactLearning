import '../App.css';
import { useContext, useRef } from 'react';
import { PostList } from '../store/post-list-store';

function Form(){

    const {addPost} = useContext(PostList)

    const usernameElement = useRef();
    const postTitleElement = useRef();
    const postContentElement = useRef();
    const reactionElement = useRef();
    const tagsElement = useRef();

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        const username = usernameElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postContent = postContentElement.current.value;
        const reactions = reactionElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        usernameElement.current.value = ""
        postTitleElement.current.value = ""
        postContentElement.current.value = ""
        reactionElement.current.value = ""
        tagsElement.current.value = ""

        addPost(username, postTitle, postContent, reactions, tags);
    }

    return (
        <>
            <form className="create-post" onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" ref={usernameElement} className="form-control" placeholder='Enter your username' id="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input type="text" ref={postTitleElement} className="form-control" placeholder='How was your day today...' id="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Body" className="form-label">Post Content</label>
                    <textarea type="textarea" ref={postContentElement} className="form-control" placeholder='Tell us more about it...' id="Body" rows={3}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="reaction" className="form-label">No of Reactions</label>
                    <input type="text" ref={reactionElement} className="form-control" placeholder='How many people reacted to this post' id="reaction"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Enter your Hashtags</label>
                    <input type="text" ref={tagsElement} className="form-control" placeholder='Please Enter tags using space' id="tags"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Form;