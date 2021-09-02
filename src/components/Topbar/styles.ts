import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  .logo-wrapper {
    display: flex;
    align-items: center;

    img { width: 45px; height: 45px; margin-right: 10px; }
    h1 { color: ${({ theme }) => theme.colors.title}; font-size: 30px; margin: 0;}
  }

  button {
    background-color: transparent;
    border: 0;
    border-radius: 50%;
    img { width: 45px; height: 45px; }
  }
`;
