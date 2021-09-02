import React from 'react';
import CustomerDTO from '../../dtos/CustomerDTO';
import { Container, Backdrop, Content } from './styles';
import { format } from 'date-fns';

interface Props {
  handleCloseModal: () => void,
  customer: CustomerDTO,
}

const Modal: React.FC<Props> = ({ handleCloseModal, customer }) => {
  const customerLink = `${window.location.origin}/?id=${customer.login.uuid}`;

  return (
    <Container>
      <Backdrop onClick={handleCloseModal} />
      <Content>
        <button className="btn-close" onClick={handleCloseModal}></button>
        <img src={customer.picture.large} className="shadow-sm" alt="" title="" />
        <h2>{`${customer.name.title} ${customer.name.first} ${customer.name.last}`}</h2>
        <h3>{customer.email}</h3>
        <small>{customer.login.uuid}</small>
        <ul>
          <li><b>Gender:</b> {customer.gender}</li>
          <li><b>Date of birth:</b> {format(new Date(customer.dob.date), 'MM/dd/yyyy')}</li>
          <li><b>Phone:</b> {customer.phone}</li>
          <li><b>Nacionality:</b> {customer.location.country}</li>
          <li>
            <b>Address:</b>
            {`${customer.location.street.name} ${customer.location.street.number}`}
          </li>
          <li>
            <b>City:</b> {`${customer.location.city}, ${customer.location.state}`}
          </li>
        </ul>
        <a href={customerLink} rel="noreferrer" target="_blank">Link de compartilhamento do perfil do cliente</a>
      </Content>
    </Container>
  );
}

export default Modal;