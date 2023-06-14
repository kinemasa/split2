import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <>
      <div className="w-full flex flex-col items-center h-screen bg-orange-100 ">
        <div className="shadow-xl w-1/2 flex flex-col items-center mt-10 p-10 bg-white rounded-2xl">
          <p>ログインして始める</p>
          <button onClick={loginInWithGoogle} className="bg-sky-200 p-5 4 mt-4 rounded-md shadow-xl">Googleでログイン</button>
        </div>
      </div>
    </>
  );
};

export default Login;
