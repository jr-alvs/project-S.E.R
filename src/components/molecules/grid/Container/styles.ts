import styled, { css } from 'styled-components';
import { IntRange } from '../../../../interfaces/utils-types';

interface IGridContainerProps {
  $columns?: IntRange<1, 13>;
  $rowGap?: number;
  $columnGap?: number;
}

export const ContainerGrid = styled.div<IGridContainerProps>`
  display: grid;

  ${({ $columns, $rowGap, $columnGap }) => css`
    grid-template-columns: repeat(${$columns ?? 12}, 1fr);
    row-gap: ${$rowGap ?? 20}px;
    column-gap: ${$columnGap ?? 20}px;
  `}
`;
