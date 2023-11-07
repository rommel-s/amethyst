import { useRouter } from "next/navigation";
import { DevProjButton } from "../Buttons";

import { AiOutlineGithub } from "react-icons/ai";
import { log } from "util";

type Entries = {
  icon?: string;
  altText?: string;
  title?: string;
  description?: string;
  linkName?: string;
  githubRepo?: string;
};

const DevCard = ({
  icon,
  altText,
  title,
  description,
  linkName,
  githubRepo,
}: Entries) => {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-white container p-4 rounded-lg">
      <img className="w-20 rounded-full" src={icon} alt={altText} />
      <h5 className="font-extrabold text-xl text-main mb-4">{title}</h5>
      <p className="font-body mb-4 h-10 border border-red ">{description}</p>
      <div className="flex flex-row container mt-2">
        <button
          className="bg-gradient-to-r from-secondary_dark_01 to-main text-center hover:shadow-lg shadow-secondary/50 text-white px-10 py-4 rounded-md w-60 min-[1400px]:w-36 min-[1400px]:py-3 min-[1400px]:px-5"
          onClick={() => router.push(`/dev-projects/${linkName}`)}
        >
          <p>Visitar site</p>
        </button>
        <button className="bg-gradient-to-r from-secondary_dark_01 to-main hover:shadow-lg shadow-secondary/50 text-white px-10 py-4 rounded-md ml-5">
          <AiOutlineGithub size={25} />
        </button>
      </div>
    </div>
  );
};

export default DevCard;
