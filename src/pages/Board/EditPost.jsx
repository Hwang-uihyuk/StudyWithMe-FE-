import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const baseURL = process.env.REACT_APP_URL;
export default function EditPost() {
  const location = useLocation();
  const postdata = location.state.data;

  const [editTitle, setEditTitle] = useState(postdata.title);
  const [editContent, setEditContent] = useState(postdata.content);

  console.log(postdata);

  //수정할 데이터 patch
  // axios.patch()

  const handleTitleChange = (e) => {
    setEditTitle(e.currentTarget.value);
  };
  const handleContentChange = (e) => {
    setEditContent(e.currentTarget.value);
  };

  const handleEditClick = () => {
    console.log(postdata.id);
    console.log(editTitle);
    console.log(editContent);

    const data = JSON.stringify({
      post_id: postdata.id,
      title: editTitle,
      content: editContent,
    });
    alert("클릭되었습니다.");
    axios
      .patch(
        `${baseURL}/post`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
        // {withCredentials : true}
      )
      .then((res) => {
        alert("글이 수정되었습니다.");
        console.log(res);
      });
  };

  return (
    <div>
      {/* post wrap */}
      <div className="w-1000 my-36 mx-auto">
        {/* post title */}
        <strong className="text-4xl">게시글 수정하기</strong>
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
                    value={editTitle}
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
              value={editContent}
            >
              {/* <input type="text" className='opacity-[50px]'>내용 입력</input>     */}
            </input>
          </div>
          {/* bt-wrap */}
          <div className="mt-[30px] text-center"></div>
          {/* <Link to="/board"> */}
          <button
            className="border px-[20px] py-[4px] bg-black text-white"
            onClick={handleEditClick}
          >
            {" "}
            수정하기{" "}
          </button>
          {/* </Link> */}

          <Link to="/board">
            <button className="border px-[20px] py-[4px]"> 취소 </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
