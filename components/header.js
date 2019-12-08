import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const HeaderStyle = styled.header`
  color: #fff;
  display: grid;
  grid-template-columns: auto 20%;
  padding: 1rem 2rem;
  border-bottom: 1px solid #fff;
  z-index: 100;

  .logo {
    font-size: 3rem;
    > * {
      padding: 0;
      margin: 1rem 0;
    }
    user-select: none;
  }

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 2rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    :hover {
      color: #eee;
    }
  }
`;

const Header = () => (
  <HeaderStyle>
    <div className="logo">
      <h1>JS QUIZ</h1>
    </div>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
  </HeaderStyle>
);

export default Header;
