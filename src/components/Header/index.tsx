import { FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Autocomplete } from "../Autocomplete";
import { useRouter } from "next/router";

export const Header: FC = () => {
  const router = useRouter();
  const option = `dark:hover:bg-gray-700 lg:hover:text-primary-700 ${styles.option}`;
  const selectedOption = `bg-primary-700 lg:text-primary-700 ${styles.selectedOption}`;
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <img
            src="https://app.goalto.io/images/Logos/alto-white.svg"
            className={styles.imageLogo}
            alt="blog Logo"
          />
          <div className={styles.optionsContainer}>
            <ul className={styles.options}>
              <li>
                <Link
                  href="/"
                  className={router.route === "/" ? selectedOption : option}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={
                    router.route === "/about" ? selectedOption : option
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/posts"
                  className={
                    router.route === "/posts" ? selectedOption : option
                  }
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={
                    router.route === "/contact" ? selectedOption : option
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.searchContainer}>
            <label htmlFor="search" className={styles.searchLabel}>
              Search the Site
            </label>
            <Autocomplete />
          </div>
        </div>
      </nav>
    </header>
  );
};
