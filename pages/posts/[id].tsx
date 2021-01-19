import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import {
  BackToHome,
  PostTitle,
  LightText,
  Content,
} from "../../pages-lib/posts/styles";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import { toggleTheme } from "../_app";
import { DiscussionEmbed } from "disqus-react";

export default function Post({
  postData,
  disqusShortname,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
    imageUrl: string;
  };
  disqusShortname: string;
}) {
  return (
    <Layout imageUrl={postData.imageUrl}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Header toggleTheme={toggleTheme}>
          <PostTitle>{postData.title}</PostTitle>
        </Header>

        <LightText>
          <Date dateString={postData.date} />
        </LightText>
        <BackToHome>
          <Link href="/">
            <a>← Voltar para Home</a>
          </Link>
        </BackToHome>
        <Content dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <BackToHome>
        <Link href="/">
          <a>← Voltar para Home</a>
        </Link>
      </BackToHome>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={{
          identifier: postData.title,
          title: postData.title,
          language: "pt-BR",
        }}
      />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
      disqusShortname: process.env.DISQUS_SHORTNAME,
    },
  };
};
