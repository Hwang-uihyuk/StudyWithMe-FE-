import React, { useState,useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Comment from "../../components/Comment";
import { ContextData } from '../../components/context/ContextData';
import { RiDeleteBinLine } from "react-icons/ri"

// axios.defaults.withCredentials = true;
const baseURL = process.env.REACT_APP_URL;

export default function Post() {
  const location = useLocation();
  const postid = location.state.postid;
  const [data, setData] = useState("");
  const {idKey} = useContext(ContextData)

  useEffect(() => {
    axios
      .get(
        `${baseURL}/post?&postID=${postid}`,
        { withCredentials: true }
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data.avatarID);
      });
  }, []);

  //댓글 삭제
  const handleDelete = (v) =>  {
      axios.delete(`${baseURL}/comment?commentID=${v.id}`,
      {withCredentials : true})
      .then((res) => {
        alert("삭제되었습니다.")
        document.location.href = '/post'
      })
  }

   //게시글 삭제
  const handlePostDelete = () => {
    axios.delete(`${baseURL}/post?postID=${data.id}`,
    {withCredentials : true})
    .then((res) => {
      console.log(res)
      alert("삭제되었습니다.")
      document.location.href = '/board'
    })
  }

  //댓글 수정
  const handleEdit = (v) => {
        //새로운폼을 만들고
        //및 data에는 변경된 content를 넣자.

        <input type="text"> </input>
      //  const data = {
      //    comment_id : v.id,
      //    content : ""
      //  }
      // axios.patch(`${baseURL}/comment`,)
  }
console.log(data.id)
console.log(data.avatarID)
console.log(window.localStorage.getItem('AVATAR_ID'))
 

  return (
    <div>
  
      {/* board wrap */}
      <div className="w-1000 mx-auto my-36">
        {/* board title */}
        <strong className="text-4xl">매칭게시판</strong>
        <p className="mb-7">코딩할사람 모여라.</p>

        {/* board_view_wrap*/}
        <div className="">
          {/* board_view */}
          <div className="w-full border-t-2 border-black">
            {/* title */}
            <div className="px-[20px] py-[15px] border-b-2 border-dashed">
              글 제목이 들어갑니다.
              {data.avatarID == window.localStorage.getItem("AVATAR_ID") ? 
              <button onClick={handlePostDelete} className="float-right text-xl"><RiDeleteBinLine/></button> 
              : ""}
            </div>
            {/* info */}
            <div className="p-[15px] border-b-[1px] border-solid border-[#999]">
              <dl className="m-b-[5px] w-[50%] relative inline-block">
                번호 : {data.id}
              </dl>
              <dl className="m-b-[5px] w-[50%] relative inline-block">
                글쓴이 : {data.nickname}
              </dl>
              <dl className="m-b-[5px] w-[50%] relative inline-block">
                작성일 : {data.createdDate}
              </dl>
              <dl className="m-b-[5px] w-[50%] relative inline-block">
                조회수 : {data.hits}
              </dl>
            </div>
          </div>
          {/* content */}
          <div className="p-[15px] border-b-[1px] border-solid border-black leading-[160%]">
            {data.content}
          </div>
        </div>

        {/* 댓글 */}
        <div className="mt-10  w-[65vw]">
          댓글
          <div>
            {data.commentDetailResponseList &&
              data.commentDetailResponseList.map((v) => (
                
                // 댓글전체
                <div className="border border-r-emerald-600 flex">
                  <div className="flex w-[50%] ">         
                      <div className="text-[blue]">{v.nickname}<br/>
                      <div className="pl-3 text-[black]">{v.content}</div>
                      </div>                  
                      
                  </div>
                  {/* 삭제와수정 */}
                  
                  {window.localStorage.getItem("AVATAR_ID") == v.avatarID ?  <div className="flex w-[50%] justify-end">                      
                  <button className="pr-1"onClick={() => handleEdit(v)}>수정</button>                      

                  <button onClick={() => handleDelete(v) }>삭제</button >

                        
                  </div>: ''}
                  
                 
                </div>
                
              ))}
          </div>
        </div>

        {/* 댓글입력 */}
        <Comment id={postid} setData={setData} data={data}/>

        {/* 댓글 삭제 및 수정 */}

        {/* bt_wrap */}
        <div className="mt-[30px] text-center">
          <a
            href="/board"
            className="bg-black text-white inline-block px-[20px] py-[10px] border border-black rounded-[2px]"
          >
            목록
          </a>

          <Link to="/post/edit" state={{ data: data }}>
            <button className="inline-block px-[20px] py-[10px] border border-black rounded-[2px]">
              수정
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
