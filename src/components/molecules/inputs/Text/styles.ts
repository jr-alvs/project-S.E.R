import styled, { css } from 'styled-components';

export const ContainerText = styled.div``;

interface IControlTextProps {
  $hasError?: boolean;
}

export const ControlText = styled.div<IControlTextProps>`
  display: flex;
  border: 1px solid #4a5568a3;
  border-radius: 5px;

  ${({ $hasError }) => css`
    ${$hasError &&
    `input:focus {
      outline-color: #f00;
    }`}
  `}
`;

export const InputText = styled.input`
  padding: 0.7em 2em;
  font-size: 0.85rem;
  border-radius: 5px;
  flex: 1;
  color: #4a5568a3;
  border: none;
`;
