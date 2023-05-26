import React from "react";
import { Link } from "react-router-dom";
import Login from "../pages/Login";

export default function Navbar() {
  return (
    <header className="text-xl flex justify-between border border-black">
      <Link to="/">Home</Link>
      <Link to="/board">Board</Link>
      <Link to="/mypage">Mypage</Link>
      <Login />
    </header>
  );
}
