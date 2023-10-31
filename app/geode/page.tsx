import {
  AiOutlineBehance,
  AiOutlineCode,
  AiOutlineDribbble,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { HiOutlineNewspaper } from 'react-icons/hi';

import { GeodeButton, GeodeContactButton } from '../../components/Buttons';
import SpinLogo from '@/components/SpinLogo';

const Geode = () => {
  return (
    <main className="bg-dark_purple_01 text-white h-screen flex justify-center">
      <section className="bg-main w-250 h-screen px-20 flex flex-col content-around">
        <SpinLogo />

        <p className="text-center text-sm">
          Olá! Seja bem vindo a conhecer um pouco mais do nosso trabalho:
        </p>

        <br />
        <div className="flex justify-center flex-col my-4">
          <div className="grid grid-cols-1 grid-rows-1 place-items-center">
            <h4 className="flex flex-row justify-evenly z-10 absolute bg-main px-5">
              Design Gráfico
            </h4>
            <div className="w-full h-0.5 bg-gradient-to-r from-main via-white to-main "></div>
          </div>

          <div className="flex flex-col items-center justify-center mt-8 min-[500px]:flex-row min-[500px]:justify-evenly min-[500px]:mt-20 ">
            <GeodeButton
              btnTitle={'Behance'}
              icon={<AiOutlineBehance size={24} />}
              btnLink={'/'}
            />
            <GeodeButton
              btnTitle={'Instagram'}
              icon={<AiOutlineInstagram size={24} />}
              btnLink={'/'}
            />
            <GeodeButton
              btnTitle={'Dribbble'}
              icon={<AiOutlineDribbble size={24} />}
              btnLink={'/'}
            />
          </div>
        </div>

        <div className="flex justify-center flex-col my-4">
          <div className="grid grid-cols-1 grid-rows-1 place-items-center">
            <h4 className="flex flex-row justify-evenly z-10 absolute bg-main px-5">
              UI e Desenvolvimento Web
            </h4>
            <div className="w-full h-0.5 bg-gradient-to-r from-main via-white to-main "></div>
          </div>

          <div className="flex flex-col items-center justify-center mt-8 min-[500px]:flex-row min-[500px]:justify-evenly min-[500px]:mt-20 ">
            <GeodeButton
              btnTitle={'Github'}
              icon={<AiOutlineGithub size={24} />}
              btnLink={'/'}
            />
            <GeodeButton
              btnTitle={'Projetos Dev'}
              icon={<AiOutlineCode size={24} />}
              btnLink={'/dev-projects'}
            />
            <GeodeButton
              btnTitle={'Blog'}
              icon={<HiOutlineNewspaper size={24} />}
              btnLink={'/blog'}
            />
          </div>
        </div>

        <div className="flex justify-center flex-col my-4">
          <div className="grid grid-cols-1 grid-rows-1 place-items-center">
            <h4 className="flex flex-row justify-evenly z-10 absolute bg-main px-5">
              Quer saber mais?
            </h4>
            <div className="w-full h-0.5 bg-gradient-to-r from-main via-white to-main "></div>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 min-[500px]:flex-row min-[500px]:justify-evenly min-[500px]:mt-20 ">
            <GeodeContactButton btnTitle={'Entre em contato'} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Geode;
