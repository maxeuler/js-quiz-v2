import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  color: #aaa;
  font-size: 1.2rem;

  @media (max-width: 800px) {
    color: #fff;
  }

  > div {
    color: #aaa;
    opacity: 0.5;
    :hover {
      opacity: 0.8;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>Created by Max Euler © 2019</p>
    <div>
      <Link href="">
        <a>
          <img src="/static/github.png" alt="GitHub icon" />
        </a>
      </Link>
    </div>
  </StyledFooter>
);

export default Footer;
