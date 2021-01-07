import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  ul {
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }
  a {
    font-size: 2.5rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
  }
`;

export default function Footer() {
  return (
    <footer>
      <FooterStyles>
        <ul>
          <li>
            <p>&copy; Slick's Slices {new Date().getFullYear()}</p>
          </li>
          <li>
            <Link to="/beers">
              Dine In Beers Available! <br /> See the List Here.
            </Link>
          </li>
        </ul>
      </FooterStyles>
    </footer>
  );
}
