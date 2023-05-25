import { PropsWithChildren } from 'react';
import { ContainerGrid } from './styles';
import { IntRange } from '@interfaces/utils-types';

interface IContainerProps {
  columns?: IntRange<1, 13>;
  rowGap?: number;
  columnGap?: number;
}

export const Container = ({
  children,
  columns,
  rowGap,
  columnGap,
}: PropsWithChildren<IContainerProps>) => {
  return (
    <ContainerGrid $columns={columns} $rowGap={rowGap} $columnGap={columnGap}>
      {children}
    </ContainerGrid>
  );
};
