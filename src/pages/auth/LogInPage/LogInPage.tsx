import { LogInForm } from "../../../features/auth";
import { PageTitle } from "../../../shared/router";

export const LogInPage = (): JSX.Element => {
  return (
    <>
      <PageTitle />
      <LogInForm />
    </>
  );
};
