import Link from 'next/link';
import {
  AiOutlineDribbble,
  AiOutlineBehance,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { AmethystLogo } from '../../Logo/Amethyst';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-main to-secondary_dark_01 p-8 left-0 bottom-0 flex flex-col justify-center text-white min-[800px]:flex-row min-[800px]:justify-between min-[800px]:p-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col min-[1400px]:flex-row">
          <AmethystLogo width={140} height={30} />
          <div className="w-full h-0.5 bg-white mt-5 min-[1400px]:w-0.5 min-[1400px]:h-full min-[1400px]:mt-0 min-[1400px]:mx-20"></div>
        </div>

        <div className="flex grid grid-cols-2 gap-2 justify-items-center min-[800px]:grid-cols-2 min-[1400px]:grid-cols-4">
          <Link href={'/'}>
            <button className="w-[100px] px-5 py-3 rounded-md">Home</button>
          </Link>
          <Link href={'/sobre'}>
            <button className="w-[100px] px-5 py-3 rounded-md mr-2">
              Sobre
            </button>
          </Link>
          <Link href={'/contato'}>
            <button className="w-[100px] px-5 py-3 rounded-md mr-2">
              Contato
            </button>
          </Link>
          <Link href={'/blog'}>
            <button className="w-[100px] px-5 py-3 rounded-md mr-2">
              Blog
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flexp-3">
        <Link href={'https://www.behance.net/'}>
          <button className="h-16">
            <AiOutlineBehance size={26} />
          </button>
        </Link>
        <Link href={'https://www.instagram.com/'}>
          <button className="h-16 mx-4">
            <AiOutlineInstagram size={26} />
          </button>
        </Link>
        <Link href={'https://www.dribbble.com/'}>
          <button className="h-16">
            <AiOutlineDribbble size={26} />
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
