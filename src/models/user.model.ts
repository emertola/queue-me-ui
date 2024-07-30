import { Gender } from '@/enums';

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
  gender: Gender;
  active: boolean;
}
