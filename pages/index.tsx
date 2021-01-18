import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import {
  TitleCenter,
  PostTitle,
  PostList,
  PostListItem,
  LightText,
} from "../pages-lib/styles";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Header from "../components/Header";
import { toggleTheme } from "./_app";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header toggleTheme={toggleTheme}>
        <TitleCenter>
          <p>
            {
              "24 anos, casado, graduado em Sistemas de Informação, Analista de Sistemas Jr, gamer nas horas vagas, desenvolvedor frontend e backend, mas com um carinho especial pelo backend ❤"
            }
          </p>
        </TitleCenter>
      </Header>
      <PostTitle>
        <PostList>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`} key={id}>
              <PostListItem>
                <a>{title}</a>
                <br />
                <LightText>
                  <Date dateString={date} />
                </LightText>
              </PostListItem>
            </Link>
          ))}
        </PostList>
      </PostTitle>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
