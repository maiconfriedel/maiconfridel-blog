import Head from "next/head";
import {
  Thumbnail,
  Container,
  Header,
  HeaderHomeImage,
  Title,
  Wrapper,
  Socials,
} from "./styles";

const name = "Maicon Gabriel Friedel";
export const siteTitle = "Maicon Gabriel Friedel";

export default function Layout({
  children,
  home,
  imageUrl,
}: {
  children: React.ReactNode;
  home?: boolean;
  imageUrl?: string;
}) {
  return (
    <Wrapper>
      {!home && (
        <Thumbnail src={imageUrl ?? "/images/profile.jpg"} alt={imageUrl} />
      )}
      <Container>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Header>
          {home && (
            <>
              <HeaderHomeImage src="/images/profile.jpg" alt={name} />
              <Title>{name}</Title>
            </>
          )}
        </Header>
        <main>{children}</main>
        <Socials>
          <a href="https://github.com/maiconfriedel" target="_blank">
            <img
              src="https://img.shields.io/badge/maiconfriedel-333?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/maiconfriedel"
              alt="githubbadge"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/maicon-gabriel-friedel-882059173"
            target="_blank"
          >
            <img
              src="https://img.shields.io/badge/Maicon%20Gabriel%20Friedel-333?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/maicon-gabriel-friedel-882059173"
              alt="linkedinbadge"
            />
          </a>
        </Socials>
      </Container>
    </Wrapper>
  );
}
