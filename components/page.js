import React from 'react';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';
import Header from './header';
import Footer from './footer';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex-grow: 1;
  }
`;

const Inner = styled.div`
  margin: 2rem auto;
  width: 90%;
  max-width: 1200px;
`;

const Page = ({ children }) => (
  <Column>
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          body: 0;
          box-sizing: border-box;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
            'Lucida Sans', Arial, sans-serif;
          font-size: 10px;

          @media (max-width: 800px) {
            background-image: linear-gradient(#0fb9b1, #2bcbba);
          }
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
      `}
    ></Global>
    <main>
      <Header></Header>
      <Inner>{children}</Inner>
    </main>
    <Footer></Footer>
  </Column>
);

export default Page;
