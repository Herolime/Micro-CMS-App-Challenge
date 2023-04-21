import { AppShell } from "@/components/AppShell";
import { Post } from "@/interfaces/post";
import { FC, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useLocalPosts } from "@/hooks/useLocalPosts";

interface PostsPageProps {
  posts: Post[];
}

export const Posts: FC<PostsPageProps> = ({ posts }) => {
  const { localPosts } = useLocalPosts();
  const allPosts = [...posts, ...localPosts];
  return (
    <AppShell>
      <div className={styles.container}>
        <div className="flex flex-row">
          <h1 className={styles.title}>Latest Posts</h1>

          <Link href="/posts/edit" className={styles.addPost}>
            Add a Post
          </Link>
        </div>

        <div className={styles.postsGrid}>
          {allPosts.map((post, i) => (
            <div key={i} className={styles.postContainer}>
              <img
                src={post.image}
                alt="Blog post image"
                className={styles.postImage}
              />
              <div className="p-6">
                <h2 className={styles.postTitle}>
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className={styles.postDescription}>{post.description}</p>
                <Link href={`/posts/${post.slug}`} className={styles.readMore}>
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
};
