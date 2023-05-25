import styled, { css } from 'styled-components';

interface IDefaultProps {
  $color?: string;
  $background?: string;
  $size?: string;
}

export const DefaultStyle = styled.button<IDefaultProps>`
  border: none;
  border-radius: 5px;
  padding: 0.7em 2em;
  font-weight: bold;
  gap: 10px;
  display: flex;
  place-items: center;
  cursor: pointer;

  ${({ $color, $background, $size }) => css`
    color: ${$color ?? '#fff'};
    background: ${$background ?? '#319795'};
    font-size: ${$size};
  `}
`;
