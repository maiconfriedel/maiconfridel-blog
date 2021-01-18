import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
