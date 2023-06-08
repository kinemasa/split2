import React from 'react';
import {useState,useEffect} from "react"
import {addDoc,collection} from "firebase/firestore"
import {db, auth} from "../firebase"
import {useNavigate} from "react-router-dom";



const CreatePost = (isAuth) => {

  const navigate = useNavigate();
  const user = auth.currentUser
  const [title,setTitle] = useState();
  const [postText,setPostText]  =useState();

  const createPost = async() =>{
    await addDoc(collection(db,"posts"),{
      title:title,
      postsText:postText,
      username:user.displayName
    });
    navigate("/")
  }
  useEffect(() =>{
if(!isAuth){
  navigate("/login");
}
  },[])
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-2/3 w-3/4 shadow-lg flex flex-col items-center md:w-1/2 md:h-1/2">

        <h1 className="text-3xl">記事を投稿する</h1>
        <p className ="text-2xl p-6">申請内容</p>
        <input type ="text" className="w-full p-4 border-4" onChange={(e) => setTitle(e.target.value)}></input>
        <p className ="text-2xl p-6">金額</p>
        <div className='flex justify-center text-center p-4'>
        <input type ="text" className="w-1/2 h-full p-3 border-4"  onChange={(e) => setPostText(e.target.value)}></input>
        <div className='p-4 text-2xl'>円</div>
        </div>
          
          <button className='w-40 h-20 p-4 m-4 shadow-lg bg-blue-400 rounded-lg hover:bg-blue-500'onClick={createPost}>投稿</button>
        </div>
        
      </div>
   
  );
};

export default CreatePost