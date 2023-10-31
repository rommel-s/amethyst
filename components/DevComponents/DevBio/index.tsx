import { useEffect, useState } from 'react';

import Image from 'next/image';
import { AmethystCrystal, DesignBezier, Lamp } from '../../AmethystIcons';

import { AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai';

import profilePic from './profile.png';

const DevBio = () => {
  const [iconSize, setIconSize] = useState(26);

  return (
    <section className="bg-gradient-to-b from-main to-secondary_dark_01 max-h-screen m-3 rounded-xl text-white flex items-center flex-col p-5 min-[500px]:justify-evenly">
      <Image
        src={profilePic}
        width={150}
        height={150}
        alt="Picture of the author"
        className=""
      />
      <div className="flex flex-col justify-center text-center my-5">
        <h1 className="font-extrabold text-2xl">Rommel Santos</h1>
        <p className="italic text-xs">Designer gráfico/Desenvolvedor Web</p>
      </div>
      <ul className="text-sm break-normal flex flex-col px-6 py-0 min-[800px]:py-2">
        <li className="flex flex-row container min-[600px]:my-5 ">
          <div className="pr-5 flex justify-center ">
            <AmethystCrystal />
          </div>
          <p className="">Designer gráfico com mais de 4 anos de experiência</p>
        </li>
        <li className="flex flex-row container my-5 ">
          <div className="pr-5 flex justify-center">
            <DesignBezier />
          </div>
          <p className="">Fundador da Amethyst Design Criativo</p>
        </li>
        <li className="flex flex-row container my-5 ">
          <div className="pr-5 flex justify-center">
            <Lamp />
          </div>
          <p className="">Ávido em resolver problemas</p>
        </li>
      </ul>

      <div className="flex flex-col max-[600px]:flex-row">
        <button className="bg-main m-1 my-3.5 flex justify-around hover:bg-secondary px-10 py-4 rounded-md w-[200px] max-[500px]:w-[100px]">
          <AiOutlineGithub size={iconSize} />
          <p className="max-[500px]:hidden">Github</p>
        </button>
        <button className="bg-main m-1 my-3.5 flex justify-around hover:bg-secondary px-10 py-4 rounded-md w-[200px] max-[500px]:w-[100px]">
          <AiOutlineWhatsApp size={iconSize} />
          <p className="max-[500px]:hidden">Contato</p>
        </button>
      </div>
    </section>
  );
};

export default DevBio;
