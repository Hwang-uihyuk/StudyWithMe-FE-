import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  console.log(REST_API_KEY)
  console.log(REDIRECT_URI)
  return (
    <>
      <Link to={KAKAO_AUTH_URL}>
        <h1>kakao Login</h1>
      </Link>
    </>
  );
}
