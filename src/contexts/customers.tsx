import React, { createContext, useState } from "react";
import api from '../services/api';
import CustomerDTO from '../dtos/CustomerDTO';

interface CustomersContextData {
  customers: CustomerDTO[],
  loadCustomers: (page: number, setLoading: (value: boolean) => void) => void
}
const CustomersContext = createContext<CustomersContextData>({} as CustomersContextData);
export const CustomersProvider: React.FC = ({ children }) => {
  const [customers, setCustomers] = useState<CustomerDTO[]>([] as CustomerDTO[]);
  const customersPerRequest = 50;

  const loadCustomers = async (page: number, setLoading: ((value: boolean) => void)) => {
    try {
      const response = (await api.get(`/?results=${customersPerRequest}&seed=coodesh${page}&page=${page}`)).data;
      setCustomers([...customers, ...response.results]);
    } catch (error) { console.log(error); }
    setLoading(false);
  }

  return (
    <CustomersContext.Provider value={{ customers, loadCustomers }}>
      {children}
    </CustomersContext.Provider>
  )
}

export default CustomersContext;