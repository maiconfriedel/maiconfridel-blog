import styled from "styled-components";

export const PostTitle = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.text};
`;

export const LightText = styled.section`
  color: #666;
`;

export const BackToHome = styled.div`
  margin: 1rem 0 0;
  background: ${(props) => props.theme.colors.secundary};
  width: 175px;
  padding: 5px;
  border-radius: 5px;

  a {
    color: ${(props) =>
      props.theme.title === "dark" ? props.theme.colors.text : "#fff"};
    text-decoration: none;
  }
`;

export const Content = styled.div`
  color: ${(props) => props.theme.colors.text};
  min-height: 100%;
  width: 100%;
`;
