// import styles from "./LoginForm.module.scss";
import { ComponentPropsWithoutRef, useState } from "react";
import cn from "classnames";

import { DefaultFormStyles as styles, useForm } from "../../../../shared/form";
import { PAGE } from "../../../../shared/router";

import { api } from "../../api";
import {
  InputText,
  WarnMessage,
  InputPassword,
  Button,
  Spinner,
} from "../../../../shared/ui";

const messages = {};

interface LoginFormProps extends ComponentPropsWithoutRef<"form"> {}

export const LoginForm = ({
  className,
  children,
  ...props
}: LoginFormProps): JSX.Element => {
  // const schema1241 = yup.object({
  //   email: yup.string().email(messages.email).required(messages.required),
  //   password: yup.string().required(messages.required),
  // });

  // const schema = {
  //   email: { type: "email", required: true, message: "" },
  //   password: { type: "password", required: true, message: "" },
  //   phone: { type: "phone", required: true, message: "" },
  //   // type 'text', 'number' ???
  // };

  // async function handleLogin() {
  // let {error} = await UserService.login(form.fields.email.value, form.fields.password.value)
  // if (error) {
  // 	form.fields.email.setError()
  // 	form.fields.password.setError()
  // 	throw new Error(error)
  // }
  // form.clear()
  // if (modif === MODAL_MOD) dispatch(setActiveModal('user_logged_in'))
  // else navigate('/')
  // }

  const [isPending, setIsPending] = useState(false);

  const submit = (): void => {
    setIsPending(true);
    api
      .login(true)
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
      .finally(() => setIsPending(false));
  };

  const form = useForm({
    fields: [
      { name: "email", type: "email", required: true },
      { name: "password", type: "password", required: true },
    ],
    onSubmit: submit,
  });

  // console.log(form);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Log in</h2>

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
            href={PAGE.register}
            disabled={isPending}
          >
            Sign up
          </Button>
          <Button
            type="button"
            className={styles.button}
            variant="link"
            href={PAGE.root}
            disabled={isPending}
          >
            Back
          </Button>
        </div>

        <Spinner className={styles.loader} hidden={!isPending} />
      </form>
    </div>
  );
};
