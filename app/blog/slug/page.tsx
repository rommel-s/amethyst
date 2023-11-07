// import Link from "next/link";
// import { getPost } from "../_services/notion";
// import ReactMarkdown from "react-markdown";

// export default async function BlogPost({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const post = await getPost(params.slug);
//   return (
//     <div>
//       {params.slug}
//       <ReactMarkdown>{post.content}</ReactMarkdown>
//       <Link href={"/"}>Voltar</Link>
//     </div>
//   );
// }

import Link from "next/link";

import { BiChevronLeft } from "react-icons/bi";

const BlogPost = () => {
  return (
    <main className="bg-main font-blog text-white h-full p-3 w-screen lg:w-[50rem] md:w-[35rem]">
      <Link href={"/blog"}>
        <p className="flex flex-row items-center hover:border-b-2 border-b-secondary w-fit decoration-secondary">
          <BiChevronLeft size={20} /> Voltar
        </p>
      </Link>

      <article className="mt-8">
        <div>
          <h2 className="font-blog font-bold text-3xl break-normal ml-3">
            postTitle
          </h2>

          <p className="mt-5 font-blog font-light ml-3">postDescription</p>
          <div className="flex flex-row mt-8 ml-3">
            <p className="bg-dark_purple_01 w-fit px-4 py-1 rounded-full mr-2">
              postTag
            </p>
            <p className="bg-dark_purple_01 w-fit px-4 py-1 rounded-full mr-2">
              postTag
            </p>
          </div>
          <div className="w-full h-px bg-white my-5"></div>
        </div>

        <div className="p-4 font-blog font-light">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt posuere enim, vitae luctus nulla scelerisque eu. Cras
            facilisis hendrerit sollicitudin. Aenean tincidunt eros a augue
            luctus congue. Nulla tincidunt arcu vitae nisi maximus pellentesque.
            Phasellus eu lacus at arcu lacinia ultrices a sit amet augue. Proin
            vestibulum eleifend urna, ac fringilla massa aliquam eget. Nam
            porttitor eros ac sodales varius. Phasellus ac cursus lacus. Cras
            volutpat nibh nec velit malesuada rhoncus. Vivamus vel leo in augue
            mattis scelerisque. Nullam sed velit a ligula rhoncus pellentesque a
            auctor nunc. Curabitur sed velit id erat mattis volutpat.
            <br />
            Pellentesque nec euismod nulla, vitae ornare ante. Maecenas aliquam
            diam et tortor tincidunt, pulvinar iaculis metus dignissim. In
            efficitur ultrices nisl, non venenatis risus molestie eu. Mauris
            fringilla consectetur nunc a ullamcorper. Etiam suscipit leo a
            mollis cursus. Curabitur vel velit dolor. Nunc fringilla lacus eu
            diam mattis molestie. Cras eu consequat lectus. Nam sem felis,
            pretium id ipsum eget, sagittis lobortis mi. Nunc eu venenatis
            libero. Mauris mi turpis, euismod malesuada lacus eget, sodales
            feugiat ligula. Nunc eu justo vitae nunc dictum dapibus quis at
            justo. Cras imperdiet ullamcorper nisl, id luctus lacus eleifend
            quis. Pellentesque fermentum diam vitae rhoncus aliquam. Curabitur
            consequat lorem a est luctus malesuada. Mauris quis massa sapien. Ut
            viverra vel lorem nec condimentum. Mauris vulputate odio sapien, id
            congue diam pulvinar vel. Aliquam urna lorem, sollicitudin eget enim
            ac, cursus ultricies nulla. Morbi erat justo, imperdiet quis enim
            at, placerat tincidunt justo. Sed dictum pharetra turpis, vitae
            pulvinar metus sollicitudin vel. Sed risus metus, eleifend ac mollis
            sed, euismod eget arcu. Donec sit amet ligula luctus, sagittis leo
            in, eleifend felis. Cras quis orci justo. Nulla auctor placerat
            arcu, ut laoreet metus porta at. Nullam mi justo, posuere quis orci
            sit amet, fermentum tempor nibh. Vestibulum ut fringilla nulla.
            <br />
            Vivamus vitae tellus gravida, condimentum nisl vitae, tempus turpis.
            Vestibulum aliquam tincidunt felis eu scelerisque. Vivamus maximus
            lacus vitae felis placerat tempor non quis nisl. Nulla elementum
            purus eget iaculis luctus. Vestibulum dui tortor, pulvinar eget
            sagittis at, lobortis vitae lectus. Nam ipsum nibh, scelerisque
            commodo aliquet at, convallis nec turpis. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Mauris id odio sit amet sapien laoreet tempor.
            <br /> Vestibulum ultricies pellentesque massa ac varius. Sed
            suscipit tellus turpis, sodales mattis sem dapibus vitae. Quisque
            felis sapien, congue non ullamcorper sed, euismod a eros. Nunc
            sagittis, nibh eu vestibulum pellentesque, nulla dui laoreet purus,
            in pharetra diam nisi ut metus. Proin porttitor commodo nisi eu
            malesuada. Praesent molestie nec ante rutrum egestas. Quisque non
            lacus quis ligula viverra vulputate a ut sem. Mauris malesuada
            consequat massa vel placerat. Aenean lobortis justo vitae mauris
            ornare, sed suscipit ligula suscipit. Aenean at tortor a dolor
            semper commodo. In id urna ligula. Quisque sollicitudin tincidunt mi
            quis laoreet. Sed magna ligula, maximus ut enim eu, sodales aliquam
            purus. Etiam tellus tellus, tempor in porta ut, commodo eu leo.
            Aliquam pulvinar, mi quis viverra fermentum, sem dui porta magna,
            eget congue ipsum felis sit amet mauris.
          </p>
        </div>
        <p className="font-blog font-light italic text-sm mt-5 mb-10">
          Postado em 06/11/2023
        </p>
      </article>
    </main>
  );
};

export default BlogPost;
