import { ComponentPropsWithoutRef, useState } from "react";
import cn from "classnames";

import styles from "./RegisterForm.module.scss";

import {
  Button,
  InputPassword,
  InputText,
  Spinner,
  WarnMessage,
} from "../../../../ui-kit";
import { PAGES } from "../../../../router/const";
import { useForm } from "../../../forms";
import { _fetchFakeServer } from "../../../../utils/utils";

const messages = {};

interface RegisterFormProps extends ComponentPropsWithoutRef<"form"> {}

export const RegisterForm = ({
  className,
  children,
  ...props
}: RegisterFormProps): JSX.Element => {
  const [isPending, setIsPending] = useState(false);

  const submit = (): void => {
    setIsPending(true);
    _fetchFakeServer({ isError: true })
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
      .finally(() => setIsPending(false));
  };

  const arePasswordsEqual = () => {
    if (form.fields.password.value === form.fields.password2.value)
      return { ok: true };
    else {
      form.fields.password.setError("");
      form.fields.password2.setError("Passwords must be equal");
      return { message: "Passwords must be equal" };
    }
  };

  const form = useForm({
    fields: [
      { name: "email", type: "email", required: true },
      { name: "password", type: "password", required: true },
      { name: "password2", type: "password", required: true },
    ],
    customValidation: arePasswordsEqual,
    onSubmit: submit,
  });

  console.log(form);

  return (
    <form
      className={cn([className, styles._])}
      onSubmit={form.submit}
      {...props}
    >
      <InputText
        className={styles.input}
        state={form.fields.email.isValid ? undefined : "error"}
        placeholder="email"
        value={form.fields.email.value}
        onChange={form.fields.email.onChange}
      />
      <WarnMessage value={form.fields.email.message} />

      <InputPassword
        className={styles.input}
        state={form.fields.password.isValid ? undefined : "error"}
        placeholder="password"
        value={form.fields.password.value}
        onChange={form.fields.password.onChange}
      />
      <WarnMessage value={form.fields.password.message} />

      <InputPassword
        className={styles.input}
        state={form.fields.password2.isValid ? undefined : "error"}
        placeholder="password2"
        value={form.fields.password2.value}
        onChange={form.fields.password2.onChange}
      />
      <WarnMessage value={form.fields.password2.message} />

      <WarnMessage
        value={form.message}
        state={form.isError ? "error" : "success"}
      />

      <Button>Submit</Button>
      <Button variant="link" href={PAGES.ROOT}>
        Back
      </Button>

      <Spinner className={styles.loader} hidden={!isPending} />
    </form>
  );
};
