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
    <main className="flex flex-col items-center bg-[#F6F8FC] ">
      {data.map((post) => (
        <div
          key={post.id}
          className="sm:max-w-[680px] h-fit rounded-[8px] shadow-md sm:mt-[16px] flex flex-col pt-[8px] pb-[8px] p-[16px] max-content">
          <div className=" flex items-center justify-between pt-[8px] pb-[8px] space-x-2 ">
            <div className="flex  h-[40px]  max-sm:h-[52px]">
              <img src="Avatar.png" className="w-[40px] h-[40px]" alt="" />
              <div className="ml-[8px] flex sm:flex-wrap max-sm:flex-col max-sm:text-[14px] leading-none max-sm:justify-around">
                <p className="font-semibold order-1 ">{post.name}</p>
                <p className="text-[#94A3B8] text-[14px] w-[100%] order-2 max-sm:order-3">
                  3 minutes ago
                </p>
                <p className="text-[#497CFF] sm:ml-[10px] order-1 max-sm:order-2">
                  @{post.userName}
                </p>
              </div>
            </div>
            <img src={post.socials} alt="" />
          </div>
          <p className="w-full pt-[8px] pb-[16px] ">{post.title}</p>
          <div
            className={`grid gap-2 ${
              post?.image?.length > 1 ? "grid-cols-2" : "grid-cols-1"
            }`}>
            {post?.image?.map(
              (image) =>
                image && (
                  <img
                    src={image}
                    className="h-auto rounded-[8px] "
                    alt=""
                  />
                )
            )}
          </div>
          <div className="w-full  pb-[16px] pt-[8px] mt-[8px] leading-[140%]">
            <p className="text-[#0072F8] inline mr-[8px]">
              {post.caption.hastag}
            </p>
            <p className="inline ">{post.caption.content}</p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Body;
