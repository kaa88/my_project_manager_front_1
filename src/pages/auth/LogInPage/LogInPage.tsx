import { Link } from "react-router-dom";
import { Button } from "antd";
import Title from "antd/es/typography/Title";
import { PAGE, PageTitle } from "../../../shared/router";
import { LogInForm } from "../../../features/auth";

export const LogInPage = (): JSX.Element => {
  return (
    <>
      <PageTitle />

      <Title>Log in</Title>
      <LogInForm />

      <Link to={PAGE.register}>
        <Button type="link">Register</Button>
      </Link>
    </>
  );
};
