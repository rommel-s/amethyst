import { useRouter } from "next/navigation";

import { AiOutlineGithub } from "react-icons/ai";

const DevCard = ({ icon, altText, title, description, siteLink, repo }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col border-1 border-transparent bg-white container p-4 rounded-lg hover:shadow-xl/5 hover:border-brand ">
      <img className="w-20 rounded-full" src={icon} alt={altText} />
      <h5 className="font-extrabold text-xl text-main mb-4">{title}</h5>
      <p className="font-body mb-4 h-10 ">{description}</p>
      <div className="flex flex-row container mt-2">
        <button className="bg-gradient-to-r from-secondary-dark-01 to-main text-center hover:shadow-xl/20 shadow-secondary/50 text-white px-10 py-4 rounded-md w-60 min-[1400px]:w-36 min-[1400px]:py-3 min-[1400px]:px-5">
          <a href={siteLink} target="_blank" rel="noopener noreferrer">
            <p>Visitar site</p>
          </a>
        </button>
        <button className="bg-gradient-to-r from-secondary-dark-01 to-main hover:shadow-xl/20 shadow-secondary/50 text-white px-10 py-4 rounded-md ml-5">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub size={25} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default DevCard;
