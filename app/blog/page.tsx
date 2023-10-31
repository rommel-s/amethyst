import Link from "next/link";
import { getPosts } from "./_services/notion";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>

      <Link href={"/"}>Voltar</Link>
    </div>
  );
}
