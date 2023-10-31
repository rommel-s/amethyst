import Link from 'next/link';

import { BsArrowLeftShort } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-secondary_dark_01 to-main fixed top-0 left-0 flex w-full">
      <Link href={'/'}>
        <button>
          <BsArrowLeftShort />
          Voltar
        </button>
      </Link>
    </header>
  );
};

export default Header;
