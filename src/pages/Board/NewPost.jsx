import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_URL;

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    // console.log(e.currentTarget.value)
    setTitle(e.currentTarget.value);
  };

  const handleContentChange = (e) => {
    setContent(e.currentTarget.value);
  };

  const handleClick = () => {
    console.log(title);
    console.log(content);

    const data = {
      board_id: 1, //나중에 고쳐
      title: title,
      content: content,
    };

    axios
      .post(
        `${baseURL}/post`,data,
        // {
        //   headers: {
        //     "Content-Type":"application/json",
        //   },
        // },
        {withCredentials : true}
      )
      .then((res) => {
        console.log(res);
        alert("새 글이 등록되었습니다.");
      });
  };

  return (
    <div>
      {/* post wrap */}
      <div className="w-1000 my-36 mx-auto">
        {/* post title */}
        <strong className="text-4xl">게시글 쓰기</strong>
        <p className="mb-7">코딩할사람 모여라.</p>

        {/* post_write_wrap */}
        <div>
          {/* post_write */}
          <div className="border-t-2 border-black">
            <div className="m-[15px]">
              <dl>
                <dt className="inline-block w-[100px]">제목</dt>
                <dd className="inline-block border w-[80%]">
                  <input
                    type="text"
                    placeholder="제목 입력"
                    className="inline-block p-2"
                    onChange={handleTitleChange}
                  />
                </dd>
              </dl>
            </div>

            <div className="border-t-2 border-dotted">
              <div className="m-[15px]">
                <dl>
                  {/* <dt className='inline-block w-[100px]'>글쓴이</dt>
                                    <dd className='inline-block border w-[20%]'>
                                        <input type="text" placeholder='글쓴이 입력' className='inline-block p-2'/>
                                    </dd> */}
                </dl>
              </div>
            </div>
            {/* 글 내용 */}
            <input
              type="text"
              className="w-[60vw] border-[1px] border-black h-[200px] border-b-[1px]"
              onChange={handleContentChange}
              placeholder="내용을 입력하세요."
            >
              {/* <input type="text" className='opacity-[50px]'>내용 입력</input>     */}
            </input>
          </div>
          {/* bt-wrap */}
          <div className="mt-[30px] text-center"></div>
          <button
            className="border px-[20px] py-[4px] bg-black text-white"
            onClick={handleClick}
          >
            {" "}
            등록{" "}
          </button>
          <button className="border px-[20px] py-[4px]"> 취소</button>
        </div>
      </div>
    </div>
  );
}
