import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import {PostList} from "../store/post-list-store";

function Post({ post }) {

  const {deletePost} = useContext(PostList);

  return (
    <>
      <div
        className="card post_card"
        style={{ width: "18rem", minWidth: "30rem" }}
      >
        {/* <img src="..." className="card-img-top" alt="..."/> */}
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
              {/* {post.reactions} */}
              <TiDelete className="deletIcon" />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge tag text-bg-primary">{tag}</span>
          ))}
          <div
            className="alert alert-primary"
            role="alert"
            style={{ margin: "15px 0 0 0" }}
          >
            This Post have been reacted by
            <span className="reactions"> {post.reactions + "K"} </span>
            people.
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
