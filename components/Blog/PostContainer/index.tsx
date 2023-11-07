import Link from "next/link";

type PostContainerProps = {
  postTitle: string;
  postDescription: string;
  postTag: string;
  postLink: string;
};

const PostContainer = ({
  postTitle,
  postDescription,
  postTag,
  postLink,
}: PostContainerProps) => {
  return (
    <div>
      <Link href={postLink}>
        <h2 className="font-blog font-bold text-3xl break-normal ml-3 hover:underline decoration-secondary">
          {postTitle}
        </h2>
      </Link>
      <p className="mt-5 font-blog font-light ml-3">{postDescription}</p>
      <div className="flex flex-row mt-8 ml-3">
        <p className="bg-dark_purple_01 w-fit px-4 py-1 rounded-full mr-2">
          {postTag}
        </p>
        <p className="bg-dark_purple_01 w-fit px-4 py-1 rounded-full mr-2">
          {postTag}
        </p>
      </div>
      <div className="w-full h-px bg-white my-5"></div>
    </div>
  );
};

export default PostContainer;
