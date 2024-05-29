import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

import styles from "./LoginForm.module.scss";

import {
  Button,
  InputPassword,
  InputText,
  WarnMessage,
} from "../../../../ui-kit";
import { PAGES } from "../../../../router/const";
import { useForm } from "../../../forms";

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

  const submit = async (): Promise<any> => {
    console.log("submitted");
  };

  const form = useForm({
    fields: [
      { name: "email", type: "email", required: true },
      { name: "password", type: "password", required: true },
    ],
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

      <WarnMessage
        value={form.message}
        state={form.isError ? "error" : "success"}
      />

      <Button>Submit</Button>
      <Button variant="link" href={PAGES.ROOT}>
        Back
      </Button>
    </form>
  );
};
