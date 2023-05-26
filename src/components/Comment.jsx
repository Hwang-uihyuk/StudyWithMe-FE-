import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextData } from './context/ContextData';

const baseURL = process.env.REACT_APP_URL;
// axios.defaults.withCredentials = true;

export default function Comment({id, setData, data}) {
  const [comment, setComment] = useState("")
  const navigate = useNavigate();
  
  const {idKey,setIdKey} = useContext(ContextData)
  console.log(idKey)

  const handleCommentChange = (e) => {
    setComment(e.currentTarget.value)
  }

  // console.log(id)
  const handleCommentClick = (e) => {
    console.log(id)
    console.log(comment)

    const data = {
      post_id : id,
      content : comment,
      }

    axios.post(`${baseURL}/comment`,data, 
    {withCredentials : true}
    )
    .then((res)=> {
      setComment('')
      console.log("댓글쓰기성공")

      axios
      .get(
        `${baseURL}/post?&postID=${id}`,
        { withCredentials: true }
      )
      .then((res) => {
        setData(res.data);
        console.log(res);
      });
    })
    
  }

  return (
    <div className='mt-10'>
        <p>(댓글쓰기)</p>
        <input 
        className='border w-[60vw] h-[8vh]' 
        placeholder='댓글을 작성하세요.'
        onChange={handleCommentChange} value={comment}></input>

        <button className='border'
        onClick={handleCommentClick}> 등록하기</button>
  </div>
  )
}
