export interface User {
  firstName: string;
  middleName?: string;
  lastName: string;
  mobile?: string;
  email: string;
  password: string;
  roles?: string[];
  _id?: string;
  imgUrl?: string;
}
