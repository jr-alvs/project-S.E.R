import styled from 'styled-components';

export const ContainerSearch = styled.div`
  display: flex;

  ${({ theme }) => `
    border: 1px solid ${theme.colors.textDetail};
    border-radius: ${theme.radius.sm}
  `}
`;

export const SearchStyle = styled.input`
  padding: 0.7em 2em;
  font-size: 0.85rem;
  flex: 1;
  color: #4a5568a3;
  border-radius: 4px 0 0 4px;
  border: none;
`;

export const ButtonSearch = styled.button`
  border: 1px solid #319795;
  border-radius: 0 3px 3px 0;
  background: #319795;
  padding: 0.7em;
  display: flex;
  place-items: center;
  cursor: pointer;
`;
