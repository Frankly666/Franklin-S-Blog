"use client";
import React, { memo, useMemo } from "react";
import type { FC, ReactNode } from "react";
import Image from "next/image";
import FranklinIcon from "@/assets/imgs/FranklinIcon";
import { Icons } from "./ui/dock";
import SparklesText from "./ui/sparkles-text";

interface IProps {
  children?: ReactNode;
}

const Header: FC<IProps> = () => {
  const tags = useMemo(
    () => ["Introdution", "Life&Code", "Music", "Books"],
    []
  );
  const icons = useMemo(
    () => [
      <Icons.gitHub className="size-5" />,
      <Icons.googleDrive className="size-5" />,
      <Icons.notion className="size-5" />,
      // <Icons.whatsapp className="size-5" />,
    ],
    []
  );

  return (
    <div className="fixed top-0  flex items-center w-full h-16 px-96 bg-white border z-50">
      {/* 网站图标以及网站名 */}
      <div className="flex justify-between items-center cursor-pointer">
        <FranklinIcon size={40} />
        <div className="relative top-[2px] text-[18px] font-bold ml-2">
          <SparklesText text="Franklin Blog"/>
          {/* <span>Franklin Blog</span> */}
        </div>
      </div>

      {/* topbar */}
      <div className="flex items-center relative top-[2px] w-[45%] ml-12 mr-10 text-mytext-light/40 text-[15px] font-bold ">
        {tags.map((item, index) => (
          <span
            key={index}
            className="cursor-pointer mr-4 hover:text-mytext-light "
          >
            {item}
          </span>
        ))}
      </div>

      {/* 图标 */}
      <div className="flex items-center h-full w-[20%] text-mytext-light/30 text-[15px]">
        {icons.map((item, index) => (
          <div
            key={index}
            className=" flex justify-center items-center mr-3 size-9 rounded-[50%] cursor-pointer hover:bg-slate-400/50 hover:translate-y-[-4px] transition-all "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Header);
