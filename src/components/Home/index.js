import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase-config";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import "./index.css";
import { useNavigate } from "react-router";

export const Home = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  let navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  const createNewPost = () => {
    navigate("/createpost");
  };

  return (
    <div className="homepage">
      <div className="create-post">
        <h1>Create a Post</h1>
        <div className="add-icon">
          <button onClick={createNewPost}>
            <AddIcon />
          </button>
        </div>
      </div>
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    <DeleteIcon sx={{ color: "grey" }} />
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer">
              <p className="postText">{post.postText}</p>
            </div>
            <p className="author">~{post.author.name}</p>
          </div>
        );
      })}
    </div>
  );
};
