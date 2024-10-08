import { RegisterForm } from "../../../features/auth";
import { PageTitle } from "../../../shared/router";

export const RegisterPage = (): JSX.Element => {
  return (
    <>
      <PageTitle />
      <RegisterForm />
    </>
  );
};
