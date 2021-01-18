import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.background};
  min-height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0.5rem auto 6rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
`;

export const HeaderHomeImage = styled.img`
  width: 10rem;
  height: 10rem;
  margin-top: 10px;
  border-radius: 9999px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 0.7rem 0 0 0;
  color: ${(props) => props.theme.colors.text};

  @media only screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const BackToHome = styled.div`
  margin: 1rem 0 0;

  a {
    color: ${(props) => props.theme.colors.text};
  }

  margin-bottom: 50px;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 900px;

  @media only screen and (max-width: 1400px) {
    width: 100%;
    height: 650px;
  }

  @media only screen and (max-width: 1100px) {
    width: 100%;
    height: 450px;
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 300px;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 200px;
  }
`;
