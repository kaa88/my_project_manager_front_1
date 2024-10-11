import { Link } from "react-router-dom";
import { Button } from "antd";
import Title from "antd/es/typography/Title";
import { PAGE, PageTitle } from "../../../shared/router";
import { RegisterForm } from "../../../features/auth";

export const RegisterPage = (): JSX.Element => {
  return (
    <>
      <PageTitle />

      <Title>Register</Title>
      <RegisterForm />

      <Link to={PAGE.login}>
        <Button type="link">Log in</Button>
      </Link>
    </>
  );
};
