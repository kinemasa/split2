import React from "react";
import { useEffect, useState } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import {useNavigate} from "react-router-dom";


const Home = (isAuth) => {

  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };
  return (
    <div className="homePage ">
      <div className="w-full flex flex-col items-center">
      {postList.map((post) => {
        return (
          <div className="postContents shadow-xl w-96 m-2" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>

            <div className="postTextContainer">{post.postsText}円</div>
            <div className="nameAndDeleteButton">
              <h3>{post.username}</h3>
              {post.username === auth.currentUser&& (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        );
      })}
    </div>

      </div>
     
  );
};

export default Home;
