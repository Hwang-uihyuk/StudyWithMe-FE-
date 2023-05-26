import axios from 'axios';
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function KaoKaoLogin() {
  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];
    console.log(KAKAO_CODE)

  console.log("인증 코드 ", KAKAO_CODE)
  const grant_type = "authorization_code";
  const REST_API_KEY = process.env.REACT_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_REDIRECT_URI

    
  if(KAKAO_CODE){
    axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    {},
    {
      headers : {
        "Content-type" : "application/x-www-form-urlencoded; charset-utf-8",
      },
    }
    ).then((res) => console.log("access token", res.data.access_token))
  }
  return (
    <div>로그인 인증 코드과 토큰 </div>
  )
}