// import Link from "next/link";
// import { getPosts } from "./_services/notion";

// export default async function Blog() {
//   const posts = await getPosts();

//   return (
//     <div>
//       <h1>Blog</h1>

//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <a href={`/blog/${post.slug}`}>{post.title}</a>
//           </li>
//         ))}
//       </ul>

//       <Link href={"/"}>Voltar</Link>
//     </div>
//   );
// }

import PostContainer from "@/components/Blog/PostContainer";
import { PostList } from "./_services/postsDB";

const Blog = () => {
  return (
    <main className="bg-main text-white h-full p-10 w-screen lg:w-[50rem] md:w-[35rem]">
      <section className="mb-10">
        {PostList.map((post, postPosition) => (
          <div key={postPosition}>
            <PostContainer
              postTitle={post.title}
              postLink={post.link}
              postDescription={post.description}
              postTag={post.tag}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Blog;
