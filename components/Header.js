import Link from "next/link";
import styled from "styled-components";

const S = {
  Link: styled.a`
    margin-right: 15px;
    cursor: pointer;
  `,
};

const Header = () => (
  <div>
    <Link href="/Main">
      <S.Link>Start</S.Link>
    </Link>
  </div>
);

export default Header;
