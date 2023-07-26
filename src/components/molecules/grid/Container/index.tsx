import { PropsWithChildren } from 'react';
import { ContainerGrid } from './styles';
import { IntRange } from '@interfaces/types/utils-types';

interface IContainerProps {
  columns?: IntRange<1, 13>;
  rowGap?: IntRange<1, 200>;
  columnGap?: IntRange<1, 200>;
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
