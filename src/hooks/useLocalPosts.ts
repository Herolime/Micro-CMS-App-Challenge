import { Post } from "@/interfaces/post";
import { useEffect, useState } from "react";

export const useLocalPosts = () => {
  const [localPosts, setLocalPosts] = useState<Post[]>([]);
  useEffect(() => {
    const postsString = localStorage.getItem("posts");
    if (!postsString) {
      localStorage.setItem("posts", JSON.stringify([]));
    } else {
      const posts = JSON.parse(postsString) as Post[];
      setLocalPosts(posts);
    }
  }, []);

  const addPost = (post: Post) => {
    const updatedPosts = [...localPosts, post];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setLocalPosts(updatedPosts);
  };
  return {
    localPosts,
    addPost,
  };
};
