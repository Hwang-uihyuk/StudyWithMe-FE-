import React from 'react'
import axios from "axios";

const baseURL = process.env.REACT_APP_URL;

export default function Logout() {

    const handleLogout = () => {
        axios
            .get(`${baseURL}/logout`)
            .then((res)=> {
                alert("로그아웃되었습니다.")
                window.localStorage.removeItem("AVATAR_ID")
                document.location.href = "/"
            })
    }

  return (
    <div className=''>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
