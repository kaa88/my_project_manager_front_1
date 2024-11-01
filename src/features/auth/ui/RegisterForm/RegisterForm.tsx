import styles from "./RegisterForm.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

interface RegisterFormProps
  extends Omit<ComponentPropsWithoutRef<"form">, "onSubmit" | "onError"> {
  onSubmit: FormProps<FieldType>["onFinish"];
  onError?: FormProps<FieldType>["onFinishFailed"];
  disabled?: boolean;
}

type FieldType = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export const RegisterForm = ({
  className,
  onSubmit,
  onError,
  disabled,
  ...props
}: RegisterFormProps): JSX.Element => {
  return (
    <Form
      className={cn(className, styles._)}
      name="register"
      labelCol={{ span: 8 }}
      style={{ maxWidth: 600 }}
      onFinish={onSubmit}
      onFinishFailed={onError}
      disabled={disabled}
      {...props}
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Required field" },
          { type: "email", message: "Incorrect email format" },
        ]}
      >
        <Input data-testid="email" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Required field" },
          { min: 8, message: "Minimum password length 8" },
          {
            pattern:
              /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()[\]{}_\-=+;:,.<>\/\?])/,
            message:
              "Password must contain at least 1 lower-case letter, 1 upper-case letter, 1 number, 1 symbol",
          },
        ]}
      >
        <Input.Password data-testid="password" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Confirm password"
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Required field" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value)
                return Promise.resolve();
              return Promise.reject(new Error("Passwords are not equal"));
            },
          }),
        ]}
      >
        <Input.Password data-testid="confirmPassword" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" data-testid="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
