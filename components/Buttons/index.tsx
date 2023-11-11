import { ReactElement } from "react";

import { AiOutlineWhatsApp } from "react-icons/ai";

import Link from "next/link";

type ButtonLabel = {
  btnTitle: string;
  btnLink: string;
  route?: () => void;
  icon?: ReactElement | null;
};

export const GeodeButton = ({ btnTitle, icon, btnLink }: ButtonLabel) => {
  return (
    <Link href={btnLink}>
      <button className="w-52 flex flex-row content-center justify-center bg-main hover:bg-dark_purple_01 text-white px-10 py-4 rounded-md mx-5 max-[500px]">
        {icon}
        <p className="ml-2.5 text-sm ">{btnTitle}</p>
      </button>
    </Link>
  );
};

export const GeodeContactButton = ({ btnTitle }: ButtonLabel) => {
  return (
    <button className="flex justify-between bg-secondary_dark_01 hover:bg-secondary text-white px-10 py-4 rounded-md ">
      <AiOutlineWhatsApp size={24} /> <p className="ml-2.5">{btnTitle}</p>
    </button>
  );
};

export const DevProjButton = ({ btnTitle, route }: ButtonLabel) => {
  return (
    <button className="bg-gradient-to-r from-secondary_dark_01 to-main hover:shadow-lg shadow-secondary/50 text-white px-10 py-4 rounded-md ">
      {btnTitle}
    </button>
  );
};
