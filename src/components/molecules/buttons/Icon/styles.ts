import styled, { css } from 'styled-components';

interface IIconsStyleProps {
  $color?: string;
  $background?: string;
  $size?: string;
}

export const IconStyle = styled.button<IIconsStyleProps>`
  border: none;
  border-radius: 5px;
  padding: 0.5em 1em;
  font-weight: bold;

  ${({ $color, $background, $size }) => css`
    color: ${$color ?? '#fff'};
    background: ${$background ?? '#319795'};
    font-size: ${$size};
  `}
`;
