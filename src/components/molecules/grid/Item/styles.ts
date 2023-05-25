import styled, { css } from 'styled-components';

interface ItemContainerProps {
  $column?: number;
}

export const ItemContainer = styled.div<ItemContainerProps>`
  ${({ $column }) => css`
    grid-column-end: span ${$column};
  `}
`;
