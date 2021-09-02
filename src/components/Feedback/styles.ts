import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 50px;
    color: ${({ theme }) => theme.colors.text_detail};
    animation: spin 2s linear infinite;
  }

  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;
