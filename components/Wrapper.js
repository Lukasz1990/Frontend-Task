import styled from "styled-components";
import React from "react";

const S = {
  Wrapper: styled.div`
    display: flex;
    width: 600px;
    padding: 40px;
    margin: 0 auto;
    flex-direction: column;
  `,
};

const Wrapper = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Wrapper;
