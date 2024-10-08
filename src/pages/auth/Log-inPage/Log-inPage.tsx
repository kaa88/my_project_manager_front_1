import { LoginForm } from "../../../features/auth";
import { PageTitle } from "../../../shared/router";

export const LoginPage = (): JSX.Element => {
  return (
    <>
      <PageTitle />
      <LoginForm />
    </>
  );
};
