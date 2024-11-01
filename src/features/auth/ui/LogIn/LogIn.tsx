import styles from "./LogIn.module.scss";
import { ComponentProps, ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import { fetchLogin } from "../../model/slice";
import {
  STATUS_PENDING,
  STATUS_REJECTED,
  useAppDispatch,
  useAppSelector,
} from "../../../../shared/store";
import { authSelectors } from "../../model/selectors";
import Title from "antd/es/typography/Title";
import { LogInForm } from "../LogInForm/LogInForm";

interface LogInProps extends ComponentPropsWithoutRef<"div"> {}

type SubmitHandler = ComponentProps<typeof LogInForm>["onSubmit"];
type ErrorHandler = ComponentProps<typeof LogInForm>["onError"];

export const LogIn = ({ className, ...props }: LogInProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const loginStatus = useAppSelector(authSelectors.status.fetchLogin);
  const isPending = loginStatus.status === STATUS_PENDING;
  const isError = loginStatus.status === STATUS_REJECTED;
  const message = loginStatus.message;

  const onSubmit: SubmitHandler = (values) => {
    if (values.email && values.password) {
      dispatch(fetchLogin({ email: values.email, password: values.password }));
    }
  };

  const onError: ErrorHandler = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={cn(className, styles._)} {...props}>
      <Title>Log in</Title>
      <LogInForm
        className={styles.form}
        onSubmit={onSubmit}
        onError={onError}
        disabled={isPending}
      />
      {isError && !!message && <p className={styles.message}>{message}</p>}
    </div>
  );
};
