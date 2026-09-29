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
    <main className="bg-light-gray flex h-full justify-center align-center flex-col mt-13">
      <div className="p-4 flex flex-col min-[600px]:flex-row min-[600px]:h-screen ">
        <aside className=" min-[600px]:sticky min-[600px]:top-0 min-[600px]:h-fit min-[600px]:w-140 ">
          <DevBio />
        </aside>

        <section className="py-5 min-[600px]:px-20 min-[600px]:h-screen min-[600px]:overflow-y-auto scrollbar-hide max-[600px]:px-10">
          <h1 className="text-main text-3xl	font-extrabold">
            PWAs e instaláveis
          </h1>

          <div className="w-full h-0.5 bg-gradient-to-r from-secondary-dark-01 to-main"></div>

          <div className="grid grid-cols-1 gap-4 my-5 min-[800px]:grid-cols-2 min-[1400px]:grid-cols-4 ">
            {Projects.pwa.map((item, index) => (
              <DevCards
                key={index}
                icon={item.icon}
                altText={item.name}
                title={item.name}
                description={item.description}
                siteLink={item.site_link}
                repo={item.repo}
              />
            ))}
          </div>
          <h1 className="text-main text-3xl	 font-extrabold">Sites estáticos</h1>
          <div className="w-full h-0.5 bg-gradient-to-r from-secondary-dark-01 to-main"></div>
          <div className="grid grid-cols-1 gap-4 my-5 min-[800px]:grid-cols-4">
            {Projects.static_sites.map((item, index) => (
              <DevCards
                key={index}
                icon={item.icon}
                altText={item.name}
                title={item.name}
                description={item.description}
                siteLink={item.site_link}
              />
            ))}
          </div>
          <h1 className="text-main text-3xl	font-extrabold">Executáveis</h1>
          <div className="w-full h-0.5 bg-gradient-to-r from-secondary-dark-01 to-main"></div>
          <div className="grid grid-cols-1 gap-4 my-5 min-[800px]:grid-cols-4">
            {Projects.exe.map((item, index) => (
              <DevCards
                key={index}
                icon={item.icon}
                altText={item.name}
                title={item.name}
                description={item.description}
                siteLink={item.site_link}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default DevProjects;
