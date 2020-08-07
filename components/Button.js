import styled, { css } from "styled-components";

const S = {
  Button: styled.button`
    background-color: #2c9cdb;
    box-shadow: none;
    border: none;
    font-size: 18px;
    color: #fff;
    width: 400px;
    height: 40px;
    font-style: normal;
    margin-top: 10px;
    cursor: pointer;
    margin: 5px;
    &:hover {
      color: black;
    }
  `,
};

const Button = ({ children, onSearchHandler }) => {
  return <S.Button onClick={onSearchHandler}>{children}</S.Button>;
};

export default Button;
