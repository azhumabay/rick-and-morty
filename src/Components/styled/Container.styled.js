import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 430px;

  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 431px) {
    padding: 0 12px;
  }
`;

export default Container;
