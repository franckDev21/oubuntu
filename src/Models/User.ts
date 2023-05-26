export default interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone_number?: string;
  picture?: string;
}