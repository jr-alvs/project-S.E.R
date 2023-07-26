import styled from 'styled-components';

interface IContainerLabelProps {
  $color?: string;
  $marginBottom?: string;
}

export const ContainerLabel = styled.label<IContainerLabelProps>`
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;

  ${({ $color, $marginBottom }) => {
    return `
    color: ${$color ?? '#4a5568'};
    margin-bottom: ${$marginBottom ?? '0px'};
  `;
  }}
`;
