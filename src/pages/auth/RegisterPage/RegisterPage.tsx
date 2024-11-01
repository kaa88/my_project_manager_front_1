import { Link } from "react-router-dom";
import { Button } from "antd";
import { PAGE } from "../../../shared/router";
import { Page } from "../../../shared/ui";
import { Register } from "../../../features/auth";

export const RegisterPage = (): JSX.Element => {
  return (
    <Page>
      <Register />

      <Link to={PAGE.login}>
        <Button type="link">Log in</Button>
      </Link>
    </Page>
  );
};
