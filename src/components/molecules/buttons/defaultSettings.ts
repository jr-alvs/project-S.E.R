import theme from '@global/styles/theme';
import { TFontSizeKeys } from '@interfaces/theme';
import { ButtonHTMLAttributes } from 'react';

export const sizes = {
  xs: '.5rem',
  sm: '.7rem',
  md: '.85rem',
  lg: '1.3rem',
  xl: '2rem',
};

export interface IDefaultProps extends ButtonHTMLAttributes<any> {
  text: string;
  click?: React.MouseEventHandler<HTMLButtonElement>;
  color?: keyof typeof theme.colors;
  background?: keyof typeof theme.colors;
  size?: TFontSizeKeys;
  startIcon?: string;
  endIcon?: string;
  isLoading?: boolean;
}
