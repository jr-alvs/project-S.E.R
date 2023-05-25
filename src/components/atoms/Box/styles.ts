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
  width: 100%;

  ${({ $marginTop, $marginBottom, $marginLeft, $marginRight }) => css`
    margin-top: ${$marginTop};
    margin-bottom: ${$marginBottom};
    margin-left: ${$marginLeft};
    margin-right: ${$marginRight};
  `}
`;
