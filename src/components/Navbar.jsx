import React from "react";
import { Link } from "react-router-dom";
import Login from "../pages/Login";
import Logout from "./Logout";

export default function Navbar() {
  return (
    <header className="text-xl flex justify-between border ">
      {/* home */}
      <div>
      <Link to="/" className="flex">
        <p className="text-6xl font-bold text-gray-700">S</p> <p className="pt-7">tudy</p>
        <p className="text-6xl font-bold text-gray-700">W</p><p className="pt-7">ith</p>
        <p className="text-6xl font-bold text-gray-700">M</p><p className="pt-7">e</p>
      </Link>
      </div>

      <div className="flex">
        <Link to="/board" className="pt-3.5">Board</Link>
        
        <Link to="/mypage" className="pt-3.5 pl-5 pr-5">Mypage</Link>

        {!window.localStorage.getItem("AVATAR_ID") && <div className="pt-3.5">
        <Login/>
        </div>}

        {window.localStorage.getItem("AVATAR_ID") && <div className="pt-3.5">
          <Logout/>
          </div>}
      </div>
    </header>
  );
}



