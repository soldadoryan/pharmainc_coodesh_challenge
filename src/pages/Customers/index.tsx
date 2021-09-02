import React from 'react';
import Texts from '../../contents/en/Customers';
import { Container, Content } from './styles';
import Topbar from '../../components/Topbar';
import Table from '../../components/Table';
import useQuery from '../../hooks/useQuery';

const Customers: React.FC = () => {
  const queryParams = useQuery();

  return (
    <Container>
      <Topbar />
      <Content className="container">
        <p>{Texts.description}</p>
        <Table idCustomer={queryParams.get('id')} />
      </Content>
    </Container>
  );
}

export default Customers;