// import styles from "./RegisterForm.module.scss";
import { ComponentPropsWithoutRef, useState } from "react";
// import cn from "classnames";

// import { DefaultFormStyles as styles, useForm } from "../../../../shared/form";
// import { PAGE } from "../../../../shared/router";

// import { api } from "../../api";
// import {
//   InputText,
//   WarnMessage,
//   InputPassword,
//   Button,
//   Spinner,
// } from "../../../../shared/ui";

// const messages = {};

// interface RegisterFormProps extends ComponentPropsWithoutRef<"form"> {}

// export const RegisterForm = ({
//   className,
//   children,
//   ...props
// }: RegisterFormProps): JSX.Element => {
//   const [isPending, setIsPending] = useState(false);

//   const submit = (): void => {
//     setIsPending(true);
//     api
//       .register(true)
//       .then((res) => console.log(res))
//       .catch((err) => console.error(err))
//       .finally(() => setIsPending(false));
//   };

//   const arePasswordsEqual = () => {
//     if (form.fields.password.value === form.fields.password2.value)
//       return { ok: true };
//     else {
//       form.fields.password.setError("");
//       form.fields.password2.setError("Passwords must be equal");
//       return { message: "Passwords must be equal" };
//     }
//   };

//   const form = useForm({
//     fields: [
//       { name: "email", type: "email", required: true },
//       { name: "password", type: "password", required: true },
//       { name: "password2", type: "password", required: true },
//     ],
//     customValidation: arePasswordsEqual,
//     onSubmit: submit,
//   });

//   // console.log(form);

//   return (
//     <div className={styles.wrapper}>
//       <h2 className={styles.title}>Sign up</h2>

//       <form
//         className={cn([className, styles.form])}
//         onSubmit={form.submit}
//         {...props}
//       >
//         <InputText
//           className={styles.input}
//           state={form.fields.email.isValid ? undefined : "error"}
//           placeholder="email"
//           value={form.fields.email.value}
//           onChange={form.fields.email.onChange}
//           disabled={isPending}
//         />
//         <WarnMessage
//           className={styles.message}
//           value={form.fields.email.message}
//         />

//         <InputPassword
//           className={styles.input}
//           state={form.fields.password.isValid ? undefined : "error"}
//           placeholder="password"
//           value={form.fields.password.value}
//           onChange={form.fields.password.onChange}
//           disabled={isPending}
//         />
//         <WarnMessage
//           className={styles.message}
//           value={form.fields.password.message}
//         />

//         <InputPassword
//           className={styles.input}
//           state={form.fields.password2.isValid ? undefined : "error"}
//           placeholder="password2"
//           value={form.fields.password2.value}
//           onChange={form.fields.password2.onChange}
//           disabled={isPending}
//         />
//         <WarnMessage
//           className={styles.message}
//           value={form.fields.password2.message}
//         />

//         <WarnMessage
//           className={styles.globalMessage}
//           value={form.message}
//           state={form.isError ? "error" : "success"}
//         />

//         <div className={styles.buttons}>
//           <Button className={styles.button} disabled={isPending}>
//             Submit
//           </Button>
//           <Button
//             type="button"
//             className={styles.button}
//             variant="link"
//             href={PAGE.login}
//             disabled={isPending}
//           >
//             Log in
//           </Button>
//           <Button
//             type="button"
//             className={styles.button}
//             variant="link"
//             href={PAGE.root}
//             disabled={isPending}
//           >
//             Back
//           </Button>
//         </div>

//         {/* <InputPassword className={styles.input} />
//         <InputPassword className={styles.input} />
//         <InputPassword className={styles.input} />
//         <InputPassword className={styles.input} />
//         <InputPassword className={styles.input} />
//         <InputPassword className={styles.input} />
//         <InputPassword className={styles.input} /> */}

//         <Spinner className={styles.loader} hidden={!isPending} />
//       </form>
//     </div>
//   );
// };

import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { api } from "../../api/api";
import { useAppDispatch } from "../../../../app/store";
import { setIsAuth } from "../../store";

interface RegisterFormProps extends ComponentPropsWithoutRef<"form"> {}

type FieldType = {
  email?: string;
  password?: string;
  repeatPassword?: string;
};

export const RegisterForm = ({
  className,
  children,
  ...props
}: RegisterFormProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);

    if (values.email && values.password)
      api
        .register({ email: values.email, password: values.password })
        .then((res) => {
          console.log(res.data);
          dispatch(setIsAuth(true));
        })
        .catch((err) => {
          console.log(err);
          dispatch(setIsAuth(false));
        });
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="login"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="Repeat password"
        name="repeatPassword"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
