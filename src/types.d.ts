export interface User {
  id: string;
  name: string;
  email: string;
  status: boolean;
  role: string;
}

export interface UserMutation {
  name: string;
  email: string;
  status: string;
  role: string;
}

export interface CheckBox {
  checkbox: boolean;
}