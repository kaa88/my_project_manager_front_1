// import styles from "./RegisterForm.module.scss";
import { ComponentPropsWithoutRef, useState } from "react";
import cn from "classnames";

import { DefaultFormStyles as styles, useForm } from "../../../../form";
import { PAGES } from "../../../../router";

import {
  InputText,
  WarnMessage,
  InputPassword,
  Button,
  Spinner,
} from "../../../../ui/kit";

import { api } from "../../api";

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
    api
      .register(true)
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

  // console.log(form);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Sign up</h2>

      <form
        className={cn([className, styles.form])}
        onSubmit={form.submit}
        {...props}
      >
        <InputText
          className={styles.input}
          state={form.fields.email.isValid ? undefined : "error"}
          placeholder="email"
          value={form.fields.email.value}
          onChange={form.fields.email.onChange}
          disabled={isPending}
        />
        <WarnMessage
          className={styles.message}
          value={form.fields.email.message}
        />

        <InputPassword
          className={styles.input}
          state={form.fields.password.isValid ? undefined : "error"}
          placeholder="password"
          value={form.fields.password.value}
          onChange={form.fields.password.onChange}
          disabled={isPending}
        />
        <WarnMessage
          className={styles.message}
          value={form.fields.password.message}
        />

        <InputPassword
          className={styles.input}
          state={form.fields.password2.isValid ? undefined : "error"}
          placeholder="password2"
          value={form.fields.password2.value}
          onChange={form.fields.password2.onChange}
          disabled={isPending}
        />
        <WarnMessage
          className={styles.message}
          value={form.fields.password2.message}
        />

        <WarnMessage
          className={styles.globalMessage}
          value={form.message}
          state={form.isError ? "error" : "success"}
        />

        <div className={styles.buttons}>
          <Button className={styles.button} disabled={isPending}>
            Submit
          </Button>
          <Button
            type="button"
            className={styles.button}
            variant="link"
            href={PAGES.LOGIN}
            disabled={isPending}
          >
            Log in
          </Button>
          <Button
            type="button"
            className={styles.button}
            variant="link"
            href={PAGES.ROOT}
            disabled={isPending}
          >
            Back
          </Button>
        </div>

        {/* <InputPassword className={styles.input} />
        <InputPassword className={styles.input} />
        <InputPassword className={styles.input} />
        <InputPassword className={styles.input} />
        <InputPassword className={styles.input} />
        <InputPassword className={styles.input} />
        <InputPassword className={styles.input} /> */}

        <Spinner className={styles.loader} hidden={!isPending} />
      </form>
    </div>
  );
};
