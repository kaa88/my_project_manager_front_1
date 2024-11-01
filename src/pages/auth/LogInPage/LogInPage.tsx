import { Link } from "react-router-dom";
import { Button } from "antd";
import { PAGE } from "../../../shared/router";
import { Page } from "../../../shared/ui";
import { LogIn } from "../../../features/auth";

export const LogInPage = (): JSX.Element => {
  return (
    <Page>
      <LogIn />

      <Link to={PAGE.register}>
        <Button type="link">Register</Button>
      </Link>
    </Page>
  );
};
