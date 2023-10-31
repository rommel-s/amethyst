import Link from "next/link";
import { getPost } from "../_services/notion";
import ReactMarkdown from "react-markdown";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  return (
    <div>
      {params.slug}
      <ReactMarkdown>{post.content}</ReactMarkdown>
      <Link href={"/"}>Voltar</Link>
    </div>
  );
}
