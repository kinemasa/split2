
import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../firebase";
import {useNavigate} from "react-router-dom";

const Login = ({setIsAuth}) => {
  // const navigate =useNavigate();
  const loginInWithGoogle = () =>{
    
    //googleでログイン
    signInWithPopup(auth,provider).then((result) =>{
      localStorage.setItem("isAuth",true);
      setIsAuth(true);
      // navigate("/split_bill/");
    })
  }
  return (
    <div>
    <p>ログインして始める</p>
    <button onClick={loginInWithGoogle}>Googleでログイン</button>
  </div>
  )
}

export default Login