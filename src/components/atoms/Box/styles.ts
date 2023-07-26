import styled, { css } from 'styled-components';

interface IContainerBoxProps {
  $marginTop?: string;
  $marginBottom?: string;
  $marginLeft?: string;
  $marginRight?: string;
}

export const ContainerBox = styled.div<IContainerBoxProps>`
  padding: 1rem;
  border-radius: 5px;
  background: #fff;

  ${({ $marginTop, $marginBottom, $marginLeft, $marginRight }) => css`
    margin-top: ${$marginTop ?? '0px'};
    margin-bottom: ${$marginBottom ?? '0px'};
    margin-left: ${$marginLeft ?? '0px'};
    margin-right: ${$marginRight ?? '0px'};
  `}
`;
