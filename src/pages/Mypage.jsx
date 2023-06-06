import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import axios from "axios";

const baseURL = process.env.REACT_APP_URL;

export default function Mypage() {
  const [hide, setHide] = useState(false);
  const [account, setAccount] = useState('')
  const [nickname,setNickName] = useState('')

  useEffect(()=>{
    axios.get(`${baseURL}/account/get`,
    { withCredentials: true })
    .then((res)=>{
      console.log(res)
      setAccount(res.data)
    })
    },[])

  const handleAccountDelete = (e) => {
      e.preventDefault();
      const quickmessage = window.confirm(
        "확인 버튼을 누르면 회원이 탈퇴됩니다."
      );
      if (quickmessage === true) {
        axios
          .delete(`${baseURL}/account/delete`)
          .then((response) => {
            console.log("성공");
            document.location.href = "/";
          })
          .catch((error) => console.log("에러."));
      }
    }
  
  const onNickNameHandler = (e) =>{
    setNickName(e.currentTarget.value)
  }

  const onNickNameChangeHandler = (e)=> {
    e.preventDefault();
    const data = ({
      nickname : nickname
    })

    axios.post(`${baseURL}/avatar/update`,data,
    {withCredentials : true})
    .then((res)=> {
      console.log(res)
      setNickName("")
      document.location.href ='/mypage'
    })
  }

  return (
    <div>
      <section className="bg-white justify-items-center items-center md:h-full">
        <div className="flex flex-col w-full h-full mt-10 mb-10 items-center justify-center px-6 py-8 md:h-full lg:py-0 max-h-full">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
            Mypage
          </div>
          <div className="w-full max-w-2xl h-full bg-white rounded-lg shadow  md:h-full 2xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="w-[50vw] p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6">
                <div className="flex w-full font-bold text-xl border-b-2">
                  {account.email}
                  {/* 회원탈퇴 폼 */}
                  <div className="text-sm border rounded-md hover:bg-slate-100 p-1  ml-2 bg-primary-600 text-black pl-5 pr-5">
                    <button
                      onClick={handleAccountDelete}
                    >
                      회원 탈퇴
                    </button>
                  </div>
                </div>
                {/* 비밀번호변경 */}
                <div className="flex place-content-between">
                  <div>비밀번호 : ********</div>
                </div>

                {/* 닉네임 변경 form */}
                <div className="flex place-content-between">
                  <div>닉네임 : {account.nickname}</div>
                  <button
                    className="w-md min-w-sm border text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={(e) => {
                      e.preventDefault();
                      setHide(v => !v)
                    }}
                  >
                    닉네임 변경
                  </button>
                </div>

                {/* 버튼 클릭하면 이 form이 나타나야함. */}
                {hide && (
                  <div className="border p-5 m-3 rounded-xl">
                    <div className="mt-3">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        닉네임 변경하기
                      </label>
                      <Input
                        placeholder="닉네임을 입력하세요."
                        onChange={onNickNameHandler}
                      />
                    </div>

                    <div className="flex justify-end gap-3 mt-3">
                      <button
                        className="text-black border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        onClick={onNickNameChangeHandler}
                      >
                        
                        확인
                      </button>
                      <button className="text-black border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">                       
                        취소
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
