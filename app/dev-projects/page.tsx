"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { Projects } from "@/data/dev-projects-data";
import DevBio from "@/components/DevComponents/DevBio";
import DevCards from "@/components/DevComponents/DevCards";
//import profile from '@/assets';

const DevProjects = () => {
  const router = useRouter();

  return (
    <main className="bg-light_gray flex container h-full justify-center align-center flex-col mt-10 container">
      <div className="container bg-light_gray flex flex-col min-[600px]:flex-row">
        <DevBio />

        <section className="container p-5">
          <h1 className="text-main text-3xl	font-extrabold">
            PWAs e instaláveis
          </h1>
          <div className="w-full h-0.5 bg-gradient-to-r from-secondary_dark_01 to-main"></div>
          <div className="grid grid-cols-1 gap-4 my-5 min-[800px]:grid-cols-2 min-[1400px]:grid-cols-3">
            {Projects.pwa.map((item, index) => (
              <DevCards
                key={index}
                icon={item.icon}
                altText={item.name}
                title={item.name}
                description={item.description}
                linkName={item.link_name}
              />
            ))}
          </div>
          <h1 className="text-main text-3xl	 font-extrabold">Sites estáticos</h1>
          <div className="w-full h-0.5 bg-gradient-to-r from-secondary_dark_01 to-main"></div>
          <div className="grid grid-cols-1 gap-4 my-5 min-[800px]:grid-cols-4">
            {/* {Projects.static_sites.map((item, index) => (
              <DevCards
                key={index}
                icon={item.icon}
                altText={item.name}
                title={item.name}
                description={item.description}
                linkName={item.link_name}
              />
            ))} */}
          </div>
          <h1 className="text-main text-3xl	font-extrabold">Executáveis</h1>
          <div className="w-full h-0.5 bg-gradient-to-r from-secondary_dark_01 to-main"></div>
          <div className="grid grid-cols-1 gap-4 my-5 min-[800px]:grid-cols-4">
            {/* {Projects.exe.map((item, index) => (
              <DevCards
                key={index}
                icon={item.icon}
                altText={item.name}
                title={item.name}
                description={item.description}
                linkName={item.link_name}
              />
            ))} */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default DevProjects;
