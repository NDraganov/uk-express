export interface SignUpUser {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  code: string;
  phone: string;
  password: string;
  confirmPassword?: string;
}
export interface SignInUser {
  email: string;
  password: string;
}

export interface UpdateUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmNewPassword: string;
}

export interface Country {
  country: string;
  calling_code: number;
}
