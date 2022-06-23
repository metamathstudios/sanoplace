type SignUpRequestType = {
  name: string;
  email: string;
  crm: string;
  password: string;
  passwordConfirm: string;
  terms: boolean;
};

export function signUpRequest(data: SignUpRequestType) {}
