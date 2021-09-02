import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { RiFilter2Fill, RiRefreshLine } from 'react-icons/ri';
import { VscAdd } from 'react-icons/vsc';
import CustomersContext from '../../contexts/customers';
import { Container, Form, CTable } from './styles';
import { format } from 'date-fns';
import CustomerDTO from '../../dtos/CustomerDTO';
import Feedback from '../Feedback';
import Texts from '../../contents/en/Customers';
import Radio from '../Radio';
import Modal from '../Modal';
import changeUrl from '../../utils/changeUrl';

interface Props {
  idCustomer: string | null,
  setIdCustomer: (value: string | null) => void
}

const Table: React.FC<Props> = ({ idCustomer, setIdCustomer }) => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMoreCustomers, setLoadingMoreCustomers] = useState(false);
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState<CustomerDTO[]>([] as CustomerDTO[]);
  const { customers, loadCustomers } = useContext(CustomersContext);
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerDTO>({} as CustomerDTO);

  useEffect(() => {
    loadCustomers(page, setLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (!!idCustomer && customers.length > 0) {
      setSelectedCustomer(customers.filter(item => item.login.uuid === idCustomer)[0]);
    }
  }, [idCustomer, customers]);

  useEffect(() => {
    const newFilterToCustomers = async () => {
      setFilteredCustomers(customers.filter(item => {
        const fullName = `${item.name.title} ${item.name.first} ${item.name.last}`;
        return (fullName.includes(search) || item.location.country.includes(search)) && (gender === '' || item.gender === gender);
      }));
    };

    newFilterToCustomers()
  }, [search, customers, gender]);

  const handleLoadMoreCustomers = async () => {
    setLoadingMoreCustomers(true);
    loadCustomers(page + 1, setLoadingMoreCustomers);
    setPage(page + 1);
  }

  const handleOpenModal = (item: CustomerDTO) => {
    changeUrl(`?id=${item.login.uuid}`)
    setSelectedCustomer(item);
  };

  const handleCloseModal = () => {
    changeUrl('')
    setIdCustomer(null);
    setSelectedCustomer({} as CustomerDTO);
  }

  return (
    <>
      {!!selectedCustomer.name && <Modal
        customer={selectedCustomer}
        handleCloseModal={handleCloseModal}
      />}
      <Container className="shadow-sm">
        <Form>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-control"
            placeholder={Texts.search_placeholder}
            disabled={loading}
          />
          <div className="btn-group dropstart">
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <RiFilter2Fill /> {Texts.filter_label}
            </button>
            <ul className="dropdown-menu">
              <li>
                <Radio label='No filter' gender={''} setGender={setGender} selectedGender={gender} />
              </li>
              <li>
                <Radio label='Male' gender={'male'} setGender={setGender} selectedGender={gender} />
              </li>
              <li>
                <Radio label='Female' gender={'female'} setGender={setGender} selectedGender={gender} />
              </li>
            </ul>
          </div>
        </Form>
        {loading ? <Feedback type='load' /> : (
          <>
            {filteredCustomers.length === 0 ? <Feedback type='empty' /> : (
              <>
                <CTable className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Birth</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCustomers.map((item) => (
                      <tr key={item.login.uuid}>
                        <td>{`${item.name.title} ${item.name.first} ${item.name.last}`}</td>
                        <td className="text-capitalize">{item.gender}</td>
                        <td>{format(new Date(item.dob.date), 'MM/dd/yyyy')}</td>
                        <td>
                          <button onClick={() => handleOpenModal(item)} type="button" className="btn btn-dark btn-sm">
                            <VscAdd />
                            <span className="view-span">{Texts.label_view_user}</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </CTable>
                <button type="button" disabled={loadingMoreCustomers} onClick={handleLoadMoreCustomers} className="btn btn-primary">
                  <RiRefreshLine /> {Texts.load_button_label}
                </button>
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
}

export default Table;