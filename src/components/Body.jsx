import React, { useEffect, useState } from "react";
import axios from "axios";

function Body() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="flex flex-col items-center bg-[#F6F8FC]">
      {data.map((post) => (
        <div
          key={post.id}
          className="w-[680px] h-fit rounded-[8px] shadow-md mt-[8px] flex flex-col items-center pt-[8px] pb-[8px]">
          <div className=" flex items-center pt-[8px] pb-[8px] pl-[16px] pr-[16px]">
            <div className="flex w-[608px] h-[40px]">
              <img src="Avatar.png" className="w-[40px] h-[40px]" alt="" />
              <div className="ml-[8px]">
                <p className="font-semibold">{post.name}</p>
                <p className="text-[#94A3B8] text-[14px]">3 minutes ago</p>
              </div>
              <p className="text-[#497CFF] ml-[10px]">@{post.userName}</p>
            </div>
            <img
              src={post.socials}
              className="w-[32px] h-[32px] ml-[8px]"
              alt=""
            />
          </div>
          <p className="w-full pt-[8px] pl-[16px] pr-[16px] pb-[16px] ">
            {post.title}
          </p>
          <div className="flex space-x-[8px] pl-[16px] pr-[16px]">
            {post?.image?.map(
              (image) =>
                image && (
                  <img
                    src={image}
                    className="w-full h-[369px] rounded-[8px]"
                    alt=""
                  />
                )
            )}
          </div>
          <div className="w-full pl-[16px] pr-[16px] pb-[16px] pt-[8px] mt-[8px] leading-[140%]">
              <p className="text-[#0072F8] inline">{post.caption.hastag}</p>
              <p className="inline ml-[8px]">{post.caption.content}</p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Body;
