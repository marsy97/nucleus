import { nanoid } from "nanoid";
import { ArticleCards } from "../../Data/BlogCards";
import Image from "next/image";
import styles from "./Styles/Articles.module.scss";
import { NextRouter, Router, useRouter } from "next/router";

export const Articles: React.FC = () => {
  const router = useRouter();
  return (
    <div className={styles.ArticlesWrapper}>
      {ArticleCards.map((v) => {
        return <Card key={nanoid(10)} data={v} router={router} />;
      })}
    </div>
  );
};

interface props {
  author: string;
  authorPicture: string;
  articlePicture: string;
  articleTitle: string;
  articleParagraph: string;
  articleDate: string | Date;
  link: string;
}

const Card: React.FC<{ data: props; router: NextRouter }> = ({ data, router }) => {
  return (
    <article
      onClick={() => {
        router.push(data.link);
      }}
      className={styles.Article}
    >
      <section className={styles.CardMainImageWrapper}>
        <Image alt="" src={data.articlePicture} layout="fill" objectFit="cover" />
      </section>
      <strong className={styles.Strong}>{data.articleDate}</strong>
      <Author name={data.author} image={data.authorPicture} />
      <h2 style={{ fontWeight: 600 }}>{data.articleTitle}</h2>
      <p style={{ margin: "0 auto", width: "90%" }}>{data.articleParagraph}</p>
    </article>
  );
};

const Author: React.FC<{ name: string; image: string }> = ({ name, image }) => {
  return (
    <div className={styles.Author}>
      <div style={{ width: 50, height: 50, overflow: "hidden", borderRadius: "50%", position: "relative" }}>
        <Image src={image} layout="fill" objectPosition="center" />
      </div>
      <h3 style={{ fontWeight: 400 }}>{name}</h3>
    </div>
  );
};
