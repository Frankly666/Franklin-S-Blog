import React, { memo, useMemo } from "react";
import type { FC, ReactNode } from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

interface IProps {
  children?: ReactNode;
}

const Introduction: FC<IProps> = () => {
  const words = useMemo(
    () => [
      {
        text: "Welcome",
      },
      {
        text: "to",
      },
      {
        text: "Franklin's",
        className: "text-blue-500 dark:text-blue-500",
      },
      {
        text: "website!",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col items-center  h-[40rem]  mt-16 pt-20">
      <TypewriterEffectSmooth words={words} />
      <p className=" text-mytext-light font-bold text-center">
        This site is just a window into the author's personal world, showcasing
        <br /> their <span className="text-purple-400 ">interests</span>,sharing
        <span className="text-purple-400 "> notes</span>, and highlighting the
        things they find truly beautiful.
      </p>
      <p className=" text-mytext-light font-bold text-center mt-4">
        Thank you for your attention, and may happiness be with you every day{" "}
        <span className="text-purple-400 ">!</span>
      </p>
    </div>
  );
};

export default memo(Introduction);
