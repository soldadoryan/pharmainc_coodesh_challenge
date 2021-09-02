import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Backdrop = styled.div`
  background-color: ${({ theme }) => theme.colors.background_alpha};
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1050;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  width: 25%;
  padding: 100px 24px 50px;
  display: flex;
  position: absolute;
  z-index: 1050;
  flex-direction: column;
  align-items: center;
  overflow-y: unset;

  button.btn-close {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  img {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    top: -75px;
    z-index: 1053;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.title};
  }

  small {
    color: ${({ theme }) => theme.colors.text};
  }

  ul {
    width: 100%;
    list-style: none;
    padding: 0;
    margin-top: 50px;

    li {
      background-color: ${({ theme }) => theme.colors.background_primary};
      width: 100%;
      height: 40px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      border-radius: 5px;

      b { margin-right: 10px; }
    }
  }

  @media (max-width: 1600px) {
    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 18px;
    }

    ul { 
      margin-top: 24px;
      
      li {
        height: 30px;
        font-size: 14px;
      }
    }

    a { font-size: 14px; }
  }

  @media (max-width: 1366px) {
    padding-top: 60px;

    img { width: 100px; height: 100px; top: -50px; }
  }

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 425px) {
    width: 90%;
  }
`;
