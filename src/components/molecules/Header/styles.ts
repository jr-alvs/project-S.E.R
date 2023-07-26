import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyle = styled.header`
  display: flex;
  width: 100vw;
  padding: 30px 10%;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    max-width: 80px;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  flex: 1;
  justify-content: center;

  ul {
    display: flex;
    gap: 1rem;
    place-items: center;
  }
`;

interface IItemMenuProps {
  $isActive?: boolean;
}

export const ItemMenu = styled(Link)<IItemMenuProps>`
  text-decoration: none;

  :hover {
    color: #319795;
  }

  ${({ $isActive }) => css`
    color: ${$isActive ? '#CE275C' : '#333'};
    font-weight: ${$isActive ? 'bold' : '500'};
  `}
`;
