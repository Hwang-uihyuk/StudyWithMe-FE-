import React from "react";
import { Link } from "react-router-dom";

export default function PostDetail({ post }) {
  return (
    <div>
      <div className="">
        {/*list-top */}
        <div className="flex border-b-2 border-slate-300">
          <div className="px-[15px] text-center w-[10%]">{post.id}</div>
          <div className="px-[15px] text-left w-[60%]">
            <Link to="/post" state={{ postid: post.id }}>
              {post.title}
            </Link>
          </div>
          <div className="px-[15px] w-[10%] text-center">
            {post.nickname.length <= 8
              ? post.nickname
              : post.nickname.substring(0, 8) + ".."}
          </div>
          <div className="px-[15px] w-[10%] text-center">
            {post.createdDate.slice(5, 10)}{" "}
          </div>
          {/* //+ " " + post.createdDate.slice(11,16) */}
          <div className="px-[15px] w-[10%] text-center">{post.hits}</div>
        </div>
      </div>
    </div>
  );
}
