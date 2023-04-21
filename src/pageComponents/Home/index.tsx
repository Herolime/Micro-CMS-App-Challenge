import { AppShell } from "@/components/AppShell";
import { Banner } from "@/components/Banner";
import { FC } from "react";
import styles from "./styles.module.css";
import { Post } from "@/interfaces/post";

interface HomePageProps {
  posts: Post[];
}

export const Home: FC<HomePageProps> = ({ posts }) => {
  const latestPost = posts[0];
  return (
    <AppShell>
      <Banner />
      <div className={styles.bodyContainer}>
        <section className={styles.homeSection}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            fermentum tortor et est facilisis aliquam. Cras sagittis cursus
            sapien, porta ultricies nisi consectetur in. Morbi tristique massa a
            mi mattis, a porta erat euismod. Vivamus porttitor nibh sed
            efficitur varius. Nam sed ligula tortor. Nam nibh metus,
            pellentesque a felis vel, ultricies vehicula nisi. Donec auctor
            ullamcorper egestas. Donec iaculis id velit non ornare.
          </p>
          <iframe
            className={styles.youtube}
            src="https://www.youtube.com/embed/s9SWlTAOwkQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
        <section className={styles.homeSection}>
          <div className={styles.latestPostContainer}>
            <img className={styles.latestPostImage} src={latestPost.image} />
            <p className={styles.latestPostText}> {latestPost.description} </p>
          </div>
          <div className={styles.postsContainer}>
            {posts.map((p, i) => {
              if (i === 0) {
                return null;
              }
              return <img className={styles.postImage} key={i} src={p.image} />;
            })}
          </div>
        </section>
      </div>
    </AppShell>
  );
};
