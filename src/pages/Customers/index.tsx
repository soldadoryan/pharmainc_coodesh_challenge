import React, { useEffect, useState } from 'react';
import Texts from '../../contents/en/Customers';
import { Container, Content } from './styles';
import Topbar from '../../components/Topbar';
import Table from '../../components/Table';
import useQuery from '../../hooks/useQuery';

const Customers: React.FC = () => {
  const [id, setId] = useState<string | null>(null);
  const queryParams = useQuery();

  useEffect(() => {
    if (queryParams.get('id') !== null)
      setId(queryParams.get('id'));
  }, []);

  return (
    <Container>
      <Topbar />
      <Content className="container">
        <p>{Texts.description}</p>
        <Table idCustomer={id} setIdCustomer={setId} />
      </Content>
    </Container>
  );
}

export default Customers;