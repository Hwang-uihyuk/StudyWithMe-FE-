import axios from "axios";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { ContextData } from "../components/context/ContextData";

const baseURL = process.env.REACT_APP_URL;

export default function KaoKaoLogin() {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1];
  console.log("인증 코드 ", KAKAO_CODE);

  const {setIdKey} = useContext(ContextData)
  //login
  const handleLogin = () => {
    axios
      .get(`${baseURL}/kakao?code=${KAKAO_CODE}`, { withCredentials: true })
      .then((res) => {
        console.log(res);
          setIdKey(res.data.avatarID)
      });
  };

  //logout
  const handleLogout = () => {
    axios
      .get(`${baseURL}/logout`,
      { withCredentials : true})
      .then((res) => {
        console.log("logout성공", res);
        alert("로그아웃되었습니다.");
        document.location.href = "/";
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      Code and Token
      <div>
        <button className="border border-black m-1" onClick={handleLogin}>
          로그인 코드 보내기
        </button>
        <button className="border border-black" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
