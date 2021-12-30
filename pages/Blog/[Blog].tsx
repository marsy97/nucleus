import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export const getStaticPaths = async () => {
  const data = await import("../../Data/ArticleNames");
  const articles = await data;
  const paths = articles.ArticleNames.map((val: string) => ({
    params: { Blog: val.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.Blog;
  const article = await import("../../Data/Articles/" + id);
  let data = {
    html: article.html,
  };

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { about: data },
  };
};

const BlogArticle: NextPage<{ about: any }> = ({ about }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nucleus | Blog | Biceps</title>
        
      </Head>

      <main className={styles.main}>{<div dangerouslySetInnerHTML={{ __html: about.html }} />}</main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default BlogArticle;
