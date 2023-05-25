import styled from 'styled-components';

interface IContainerIconProps {
  color?: string;
}

export const ContainerIcon = styled.span.attrs({
  className: 'material-icons',
})<IContainerIconProps>`
  font-size: 1rem;
  color: ${({ color }) => color};
`;
