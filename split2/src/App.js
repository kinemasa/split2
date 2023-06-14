import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import CreatePost from "./Components/CreatePost";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <>
      <Router>
        <Navbar isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Home isAuth ={isAuth}/>}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth} />}
          ></Route>
          <Route
            path="/logout"
            element={<Logout setIsAuth={setIsAuth} />}
          ></Route>
          <Route path ="/profile" element={<Profile/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
