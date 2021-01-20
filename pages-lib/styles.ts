import styled from "styled-components";

export const TitleCenter = styled.section`
  font-size: 1.1rem;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const PostsContainer = styled.section`
  font-size: 1.1rem;
  line-height: 1.4;
`;

export const PostList = styled.section`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

export const PostListItem = styled.section`
  margin: 0 0 1rem;
  background: ${(props) => props.theme.colors.primary};
  padding: 30px 20px;
  border-radius: 15px;

  a {
    color: ${(props) => props.theme.colors.text};
  }

  a:hover {
    text-decoration: none;
  }

  :hover {
    cursor: pointer;
  }
`;

export const LightText = styled.section`
  color: #666;
`;
