import { PropsWithChildren } from 'react';
import { ItemContainer } from './styles';

interface IItemProps {
  column?: number;
}

export const Item = ({ children, column }: PropsWithChildren<IItemProps>) => {
  return <ItemContainer $column={column}>{children}</ItemContainer>;
};
