import { AppShell } from "@/components/AppShell";
import { Post } from "@/interfaces/post";
import { FC } from "react";
import styles from "./styles.module.css";

interface PostViewProps {
  post: Post;
}

export const ViewPost: FC<PostViewProps> = ({ post }) => {
  return (
    <AppShell>
      <div className="container mx-auto py-8">
        <article className={styles.article}>
          <header className="mb-8">
            <h1 className={styles.title}>{post.title}</h1>
            <p className="text-gray-600">Published on {post.date}</p>
          </header>

          <img src={post.image} alt="Main image" className={styles.image} />

          <div className="prose max-w-none">
            <p>{post.body}</p>
          </div>
        </article>
      </div>
    </AppShell>
  );
};
