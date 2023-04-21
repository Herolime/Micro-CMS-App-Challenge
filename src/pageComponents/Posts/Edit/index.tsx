import { AppShell } from "@/components/AppShell";
import { FC, useState } from "react";
import styles from "./styles.module.css";
import { useLocalPosts } from "@/hooks/useLocalPosts";
import { Post } from "@/interfaces/post";
import { useRouter } from "next/router";

export const EditPost: FC = () => {
  const { addPost, localPosts } = useLocalPosts();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    if (title && body) {
      const newPost: Post = {
        title: title,
        body: body,
        description: "a locally created Post",
        date: "22 Apr, 2023",
        slug: `local-${localPosts.length}`,
        image: "https://via.placeholder.com/640x480.png?text=Placeholder+Image",
      };
      addPost(newPost);
      router.replace("/posts");
    }
    return;
  };

  return (
    <AppShell>
      <div className="container mx-auto py-8">
        <h1 className={styles.title}>Create a new Post</h1>
        <form className={styles.postForm}>
          <div className="mb-6">
            <label htmlFor="title" className={styles.label}>
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className={styles.input}
              placeholder="Enter title here"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="image" className={styles.label}>
              Featured Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className={styles.input}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="content" className={styles.label}>
              Content
            </label>
            <textarea
              id="content"
              name="content"
              className={`resize-none appearance-none ${styles.textArea}`}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </AppShell>
  );
};
