import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background_primary};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 24px 0;

  p { 
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 40px;

    @media (max-width: 425px) {
      text-align: center;
      padding: 0 10px;
      margin-bottom: 20px;
    }
  }
`;

