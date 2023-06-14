import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
const loginOutWithGoogle = () => {
  //googleでログイン
  localStorage.setItem("isAuth", false);
  navigate("/");
  setIsAuth(false);
 
};
  return (
    <>
    <div className="w-full flex flex-col items-center h-screen bg-orange-100 ">
      <div className="shadow-xl w-1/2 flex flex-col items-center mt-10 p-10 bg-white rounded-2xl">
        <p>ログアウトする</p>
        <button onClick={loginOutWithGoogle} className="bg-sky-200 p-5 4 mt-4 rounded-md shadow-xl">ログアウト</button>
      </div>
    </div>
    </>
  )
}

export default Logout