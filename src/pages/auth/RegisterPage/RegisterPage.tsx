import { Link } from "react-router-dom";
import { RegisterForm } from "../../../features/auth";
import { PAGE, PageTitle } from "../../../shared/router";

export const RegisterPage = (): JSX.Element => {
  return (
    <>
      <PageTitle />
      <h2>Register</h2>
      <RegisterForm />
      <Link
        type="button"
        // className={styles.button}
        // variant="link"
        to={PAGE.login}
        // disabled={isPending}
      >
        Log in
      </Link>
    </>
  );
};
