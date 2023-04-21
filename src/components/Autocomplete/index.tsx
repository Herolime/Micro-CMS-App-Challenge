import { Post } from "@/interfaces/post";
import { Posts } from "@/mocks/posts";
import { Combobox, Transition } from "@headlessui/react";
import { FC, Fragment, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useLocalPosts } from "@/hooks/useLocalPosts";

export const Autocomplete: FC = () => {
  const { localPosts } = useLocalPosts();
  const router = useRouter();
  const posts = [...Posts, ...localPosts];

  const [selected, setSelected] = useState(Posts[0]);
  const [query, setQuery] = useState("");

  const filteredPosts: Post[] =
    query === ""
      ? posts
      : posts.filter((p) =>
          p.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const goToPost = (post: Post) => {
    if (post.slug) {
      router.push(`/posts/${post.slug}`);
    }
    return;
  };

  return (
    <>
      <Combobox value={selected} onChange={setSelected}>
        <div className={styles.container}>
          <div className={styles.comboContainer}>
            <Combobox.Input
              className={styles.input}
              placeholder="Enter Keyword"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className={styles.comboOptions}>
              {filteredPosts.length === 0 && query !== "" ? (
                <div className={styles.emptyResults}>Nothing found.</div>
              ) : (
                filteredPosts.map((post, i) => (
                  <Combobox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : ""
                      }`
                    }
                    value={post}
                    onClick={() => goToPost(post)}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {post.title}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </>
  );
};
