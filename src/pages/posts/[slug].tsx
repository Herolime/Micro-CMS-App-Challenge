import { Posts } from "@/mocks/posts";
import { ViewPost } from "@/pageComponents/Posts/View";
import { GetStaticPaths, GetStaticProps } from "next";

export default ViewPost;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = Posts;
  const slug = params?.slug as string;
  const post = !slug ? posts[0] : posts.find((p) => p.slug === slug);

  return {
    props: {
      post: post,
    },
  };
};
