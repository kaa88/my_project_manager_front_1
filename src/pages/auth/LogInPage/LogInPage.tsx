import { Link } from "react-router-dom";
import { LogInForm } from "../../../features/auth";
import { PAGE, PageTitle } from "../../../shared/router";

export const LogInPage = (): JSX.Element => {
  return (
    <>
      <PageTitle />

      <h2>Log in</h2>

      <LogInForm />
      <Link
        type="button"
        // className={styles.button}
        // variant="link"
        to={PAGE.register}
        // disabled={isPending}
      >
        Sign up
      </Link>
    </>
  );
};
