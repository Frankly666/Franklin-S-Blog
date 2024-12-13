import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Image from "next/image";
import icon from "./FranklinIcon.png";

interface IProps {
  children?: ReactNode;
  size?: number
}

const FranklyIcon: FC<IProps> = ({size = 20}) => {
  return <Image src={icon} alt="" width={size} height={size}/>;
};

export default memo(FranklyIcon);
