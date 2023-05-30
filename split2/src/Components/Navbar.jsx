import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <div className="w-screen bg-orange-300 h-20 flex justify-center gap-5 items-center">
        <button className="block  text-2xl  text-white  hover:text-orange-500 ">
          <Link to="/">
            {/* <FontAwesomeIcon icon={faHome} /> */}
            ホーム
          </Link>{" "}
        </button>

        {!isAuth ? (
          <button className="block  text-2xl  text-white  hover:text-orange-500 ">
            <Link to="/login" className="">
              {/* <FontAwesomeIcon icon={faHome} /> */}
              ログイン
            </Link>
          </button>
        ) : (
          <>
            <button className="block  text-2xl  text-white  hover:text-orange-500 ">
              <Link to="/createPost" className="">
                {/* <FontAwesomeIcon icon={faHome} /> */}
                記事投稿
              </Link>
            </button>
            <button className="block  text-2xl  text-white  hover:text-orange-500">
              <Link to="/logout" className="">
                {/* <FontAwesomeIcon icon={faHome} /> */}
                ログアウト
              </Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;