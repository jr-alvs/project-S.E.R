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
  color?: string;
  background?: string;
  size?: keyof typeof sizes;
  startIcon?: string;
  endIcon?: string;
}
