export default interface CustomerDTO {
  login: {
    uuid: string,
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string,
  },
  email: string,
  phone: string,
  name: {
    title: string,
    first: string,
    last: string,
  },
  gender: string,
  dob: {
    date: string,
    age: number
  },
  location: {
    street: {
      name: string,
      number: number
    },
    city: string,
    state: string,
    postcode: string,
    country: string,
  },
};