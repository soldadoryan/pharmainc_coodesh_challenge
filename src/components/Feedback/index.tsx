import React from 'react';
import { VscLoading } from 'react-icons/vsc';
import Texts from '../../contents/en/Customers';
import { Container } from './styles';

interface Props {
  type: 'empty' | 'load'
}

const Feedback: React.FC<Props> = ({ type }) => {
  return (
    <Container>
      {type === 'empty' ? <h2>{Texts.empty_list}</h2> : <VscLoading />}

    </Container>
  );
}

export default Feedback;