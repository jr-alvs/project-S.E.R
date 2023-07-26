import { TColorKeys, TFontSizeKeys } from '@interfaces/theme';
import styled from 'styled-components';

interface IDefaultProps {
  $color?: TColorKeys;
  $background?: TColorKeys;
  $size?: TFontSizeKeys;
}

export const DefaultStyle = styled.button<IDefaultProps>`
  border: none;
  border-radius: 5px;
  padding: 0.7em 2em;
  font-weight: bold;
  gap: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  :hover {
    background: #a7a7a7;
  }

  ${({ $color, $background, $size, theme }) => {
    return `
      color: ${theme.colors[$color ?? 'primaryContrast']};
      background: ${theme.colors[$background ?? 'primary']};
      font-size: ${theme.fontSizes[$size ?? 'md']}
  `;
  }}
`;
