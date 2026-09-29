import Link from "next/link";

import { BsArrowLeftShort } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-secondary-dark-01 to-main fixed top-0 left-0 flex w-full h-13  items-center justify-start px-4 z-50 ">
      <Link href={"/"}>
        <button className="">
          <BsArrowLeftShort color="white" size={35} />
        </button>
      </Link>
    </header>
  );
};

export default Header;
