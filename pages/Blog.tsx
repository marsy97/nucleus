import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BlogStyle from "../styles/Blog.module.scss";
import { Articles } from "../components/Blog/Articles";

const Blog: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nucleus | Blog</title>
        
        
      </Head>

      <main className={styles.main}>
        <div className={BlogStyle.TopCard}>
          <h1 className={BlogStyle.h1}>Darac blog</h1>
          <p>Naši treneri i stručnjaci donose vam korisne savjete i članke o najnovijim postignućima i novostima iz svijeta sporta.</p>
          <span className={BlogStyle.LeftLine}></span>
        </div>
        <Articles />
      </main>

      
    </div>
  );
};

export default Blog;
