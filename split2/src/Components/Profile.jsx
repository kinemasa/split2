import React from 'react';
import {useState,useEffect} from "react"
import {addDoc,collection} from "firebase/firestore"
import {db, auth} from "../firebase"
import {useNavigate} from "react-router-dom";



const Profile = () => {

 
  return (
    <>
    <h3>プロフィールページ</h3>
    </>
  )
};

export default Profile