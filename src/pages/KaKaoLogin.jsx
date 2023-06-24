import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ContextData } from "../components/context/ContextData";

const baseURL = process.env.REACT_APP_URL;

export default function KaoKaoLogin() {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1];
//   console.log("인증 코드 ", KAKAO_CODE);
    console.log(KAKAO_CODE)
  const {idKey,setIdKey} = useContext(ContextData)
  //login

  
  const testClick = () => {
    axios
    .get(`${baseURL}/kakao?code=${KAKAO_CODE}`, { withCredentials: true })
    .then((res) => {
      console.log(res);
        setIdKey(res.data.avatarID)
        window.localStorage.setItem("AVATAR_ID",res.data.avatarID)
    })
    .catch((error) => console.log(error))
  }
  useEffect(()=>{

        axios
        .get(`${baseURL}/kakao?code=${KAKAO_CODE}`, { withCredentials: true })
        .then((res) => {
          console.log(res);
            setIdKey(res.data.avatarID)
            window.localStorage.setItem("AVATAR_ID",res.data.avatarID)
        })
        .catch((error) => console.log(error))
    
    console.log("useeffect 마지막 부분임")
   
  },[])


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
      <div>
        {/* <button className="border border-black m-1" onClick={handleLogin}>
          로그인 코드 보내기
        </button> */}
        <div>
            로그인이 완성되었습니다.
        </div>
        <button onClick={testClick}> test </button>
        <button className="border border-black" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
