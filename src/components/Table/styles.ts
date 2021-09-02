import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 24px;
  height: 700px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1440px) {
    height: 600px;
  }

  @media (max-width: 425px) {
    span.view-span { display: none }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  .dropdown-menu {
    padding: 10px 20px;
  }

  & > input {
    width: 90%;
    height: 40px;
  }

  button {
    width: calc(10% - 10px);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 20px;
      margin-right: 5px;
    }
  }

  @media (max-width: 1024px) {
    & > input { width: 85% }
  }
  
  @media (max-width: 768px) {
    & > input { width: 80% }
  }

  @media (max-width: 425px) {
    & > input { width: 70% }
  }

  @media (max-width: 375px) {
    & > input { width: 65% }
  }
`;

export const CTable = styled.table`
  font-size: 14px;
`;
