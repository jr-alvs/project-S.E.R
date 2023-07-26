import styled from 'styled-components';

interface IIconsStyleProps {
  $color?: string;
  $size?: string;
}

export const IconStyle = styled.button<IIconsStyleProps>`
  border: none;
  border-radius: 5px;
  padding: 0.5em 1em;
  font-weight: bold;
  gap: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background: transparent;

  ${({ $color, $size }) => {
    return `
    color: ${$color ?? '#fff'};
    font-size: ${$size};
  `;
  }}
`;
