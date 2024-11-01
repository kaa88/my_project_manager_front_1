import styles from "./LogInForm.module.scss";
import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

interface LogInFormProps
  extends Omit<ComponentPropsWithoutRef<"form">, "onSubmit" | "onError"> {
  onSubmit: FormProps<FieldType>["onFinish"];
  onError?: FormProps<FieldType>["onFinishFailed"];
  disabled?: boolean;
}

type FieldType = {
  email?: string;
  password?: string;
};

export const LogInForm = ({
  className,
  onSubmit,
  onError,
  disabled,
  ...props
}: LogInFormProps): JSX.Element => {
  return (
    <Form
      className={cn(className, styles._)}
      name="login"
      labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      // initialValues={{ remember: true }}
      onFinish={onSubmit}
      onFinishFailed={onError}
      // autoComplete="off"
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
        rules={[{ required: true, message: "Required field" }]}
      >
        <Input.Password data-testid="password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" data-testid="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
