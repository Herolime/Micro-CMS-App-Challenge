import { Posts } from "@/mocks/posts";
import { Home } from "@/pageComponents/Home";

export default Home;

export const getStaticProps = async () => {
  return {
    props: {
      posts: Posts,
    },
  };
};
