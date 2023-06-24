import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import PostDetail from "../../components/PostDetail";
import { Link } from "react-router-dom";
import { ContextData } from '../../components/context/ContextData';
import { BiSearch } from "react-icons/bi"

const baseURL = process.env.REACT_APP_URL;

export default function Board({children}) {
  const [data, setData] = useState("");
  const [searchResult, setSearchResult]= useState('')
  const [searchPoint, setSearchPoint] = useState(0)
  const [pages, setPages] = useState("sdf")

  const avatarId = useContext(ContextData)
  console.log(avatarId)
  // 게시판 불러오기
  useEffect(() => {
    axios
      .get(`${baseURL}/board?page=0&boardName=matching`)
      .then((res) => {
        setData(res.data.postResponseList);
        console.log(res);
        setPages(res.data.totalPages)
        console.log(res.data.totalPages)
      });
  }, []);
  
  

  //검색창
  const [search, setSearch] = useState('')

  const handleSearchChange = (e) => {
    setSearch(e.currentTarget.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    axios.get(`${baseURL}/search_board?page=0&boardName=matching&keyword=${search}`)
    .then((res)=> {
      alert("검색 결과 불러오기 성공")
      setSearch("")
      setSearchPoint((prev) => prev+1)
      setSearchResult(res.data.postResponseList)
      console.log(res)
      
    })
  }
  // 글쓰기 Button
  const handleNewPostClick = () => {
    <Link to=""></Link>;
  };
  return (
    <div>
      {/* board wrap */}
      <div className="w-1000 mx-auto my-36">
        {/* board title */}
        <strong className="text-4xl">매칭게시판</strong> 
        <p className="mb-7">코딩할사람 모여라.sdf</p>

        {/* board_list_wrap */}
        <div></div>
          {/* board_list */}
          <div className="w-full border-t-2 border-black ">
            {/* board list-top */}
            <div className="border-b-2 border-slate-300 ">
              <div className="inline-block p-[15px] bg-slate-600 text-center text-l w-[10%]">
                번호
              </div>
              <div className="inline-block p-[15px] bg-slate-400 text-center w-[60%]">
                제목
              </div>
              <div className="inline-block p-[15px] text-center w-[10%]">
                글쓴이
              </div>
              <div className="inline-block p-[15px] text-center w-[10%]">
                작성일
              </div>
              <div className="inline-block p-[15px] text-center w-[10%] ">
                조회수
              </div>
            </div>

            {searchPoint ===0 && data && data.map((v, i) => <PostDetail post={v} />)}
            {searchPoint > 0 && searchResult && searchResult.map((v, i) => <PostDetail post={v} />)}
            
          </div>

          {/* board page */}
          <div className="mt-[30px] text-center">
            <a href="#" className="pt-[10px]">              
              ....
            </a>
            <a href="#" className="pt-[10px]">              
              1
            </a>
            <a href="#" className="pt-[10px]">              
              2
            </a>
            <a href="#" className="pt-[10px]">              
              3
            </a>
            <a href="#" className="pt-[10px]">              
              4
            </a>
            <a href="#" className="pt-[10px]">              
              5
            </a>
            <a href="#" className="pt-[10px]">              
              ....
            </a>
          
          </div>

          {/* serach */}
          <form className="flex justify-center pt-3
          " onSubmit={handleSearchSubmit}      
          >
              <div className="border-l border-t border-b pt-1 pl-2 rounded-l-full">
                <BiSearch />
              </div>
              <input type="text"
              placeholder="검색어를 입력하세요."
              className="text-center border-t border-b"
              onChange={handleSearchChange}
              value={search}></input>
              <button className="border-r border-t border-b rounded-r-full pl-1 pr-3"
               >검색</button>
          </form>

          {/* button */}
          {/* button wrap */}
          <div className="mt-[30px] text-center">
            <Link to="/post/new">
              <button
                className="py-1.5 px-6 text-white text-sm font-bold bg-black"
                onClick={handleNewPostClick}
              >
                글쓰기
              </button>
            </Link>
          </div>
        </div>
      </div>
    
  );
}
