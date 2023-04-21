import { Posts } from "@/pageComponents/Posts";
import { Posts as Mocks } from "@/mocks/posts";

export default Posts;

export const getStaticProps = async () => {
  return {
    props: {
      posts: Mocks,
    },
  };
};
