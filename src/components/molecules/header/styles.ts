import styled, { css } from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  width: 100vw;
  padding: 30px 10%;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    max-height: 60px;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  flex: 1;
  justify-content: center;

  ul {
    display: flex;
    gap: 1rem;
  }
`;

interface IItemMenuProps {
  $isActive?: boolean;
}

export const ItemMenu = styled.li<IItemMenuProps>`
  list-style: none;
  text-transform: uppercase;

  ${({ $isActive }) => css`
    color: ${$isActive ? '#CE275C' : '#333'};
    font-weight: ${$isActive ? 'bold' : '500'};
  `}
`;
