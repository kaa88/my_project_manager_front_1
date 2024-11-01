import styles from "./Register.module.scss";
import { ComponentProps, ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import { fetchRegister } from "../../model/slice";
import {
  STATUS_PENDING,
  STATUS_REJECTED,
  useAppDispatch,
  useAppSelector,
} from "../../../../shared/store";
import { authSelectors } from "../../model/selectors";
import Title from "antd/es/typography/Title";
import { RegisterForm } from "../RegisterForm/RegisterForm";

interface RegisterProps extends ComponentPropsWithoutRef<"div"> {}

type SubmitHandler = ComponentProps<typeof RegisterForm>["onSubmit"];
type ErrorHandler = ComponentProps<typeof RegisterForm>["onError"];

export const Register = ({
  className,
  ...props
}: RegisterProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const loginStatus = useAppSelector(authSelectors.status.fetchLogin);
  const isPending = loginStatus.status === STATUS_PENDING;
  const isError = loginStatus.status === STATUS_REJECTED;
  const message = loginStatus.message;

  const onSubmit: SubmitHandler = (values) => {
    if (values.email && values.password) {
      dispatch(
        fetchRegister({ email: values.email, password: values.password })
      );
    }
  };

  const onError: ErrorHandler = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={cn(className, styles._)} {...props}>
      <Title>Register</Title>
      <RegisterForm
        className={styles.form}
        onSubmit={onSubmit}
        onError={onError}
        disabled={isPending}
      />
      {isError && !!message && <p className={styles.message}>{message}</p>}
    </div>
  );
};
