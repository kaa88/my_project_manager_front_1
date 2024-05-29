import { ChangeEvent, FormEventHandler, useState } from "react";

interface FormParams {
  onSubmit: () => void;
  customValidation?: () => FormValidationResult;
  fields: FormParamsField[];
}

interface FormParamsField {
  name: string;
  type?: FormFieldType;
  defaultValue?: string;
  required?: boolean;
  validate?: boolean;
}

type FormFieldType = "email" | "password" | "phone" | undefined;

type FormFieldErrorType =
  | typeof ERROR_REQUIRED
  | typeof ERROR_INCORRECT
  | undefined;

interface FormValidationResult {
  ok?: boolean;
  message?: string;
}

type FormFields = { [key: string]: FormField };

const ERROR_REQUIRED = "required";
const ERROR_INCORRECT = "incorrect";

export const useForm = (params: FormParams) => {
  const validateFormCustom = params.customValidation;

  const initialFields: FormFields = {};
  params.fields.forEach((field) => {
    initialFields[field.name] = new FormField(field, (value: FormField) =>
      setFields({ ...fields, [field.name]: value })
    );
  });

  const [fields, setFields] = useState(initialFields);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState<string | undefined>();

  // Form handlers
  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const validation = validateForm(fields);
    const customValidation = validateFormCustom
      ? validateFormCustom()
      : { ok: true };

    if (!validation.ok || !customValidation.ok) {
      setIsError(true);
      return setMessage(validation.message || customValidation.message);
    }

    setIsError(false);
    setMessage("");
    params.onSubmit();
  };

  const setError = (message: string) => {
    setIsError(true);
    if (message) setMessage(message);
  };
  const removeError = (message = "") => {
    setIsError(false);
    setMessage(message);
  };
  const clear = () => {
    Object.values(fields).forEach((field) => field.clear());
    setIsError(false);
    setMessage("");
  };

  function validateForm(fields: FormFields) {
    let errors: string[] = [];
    let message = "";

    Object.values(fields).forEach((field) => {
      let errorType = field.validate();
      if (errorType) errors.push(errorType);
    });

    if (errors.length === 1) {
      if (errors[0] === ERROR_INCORRECT)
        message = "Please enter correct values";
      else message = "Please fill in required fields";
    }
    if (errors.length > 1) {
      let requiredCount = 0,
        incorrectCount = 0;
      errors.forEach((err) => {
        if (err === ERROR_INCORRECT) incorrectCount++;
        else requiredCount++;
      });
      if (incorrectCount && !requiredCount)
        message = "Please fill in the fields with correct values";
      else message = "Please fill in required fields";
    }

    return {
      ok: !errors.length,
      message,
    };
  }

  return {
    fields,
    isError,
    message,
    submit,
    setError,
    removeError,
    clear,
  };
};

// FIELD
const fieldMessages = {
  email: {
    required: "Email is required",
    incorrect: "Incorrect email",
  },
  password: {
    required: "Password is required",
    incorrect: "Incorrect password",
  },
  phone: {
    required: "Please fill in your phone number",
    incorrect: "Incorrect phone number",
  },
};

const validations: { [key: string]: any } = {
  email(value: string): boolean {
    return /^\S+@\S+\.\S+$/.test(value);
  },
  password(value: string): boolean {
    return value.length >= 4;
  },
  phone(value: string): boolean {
    return !value.match(/_/);
  },
};

class FormField {
  _updateField: () => void;
  type: FormFieldType;
  isRequired: boolean;
  isValidating: boolean;
  isValid: boolean;
  defaultValue: string;
  value: string;
  defaultErrorType: FormFieldErrorType;
  errorType: FormFieldErrorType;
  message: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setValue: (value: string) => void;
  validate: () => FormFieldErrorType | undefined;
  clear: () => void;
  setError: (message: string) => void;

  constructor(params: FormParamsField, setField: (field: FormField) => void) {
    this._updateField = function () {
      setField(this);
    };
    this.type = params.type;
    this.isRequired = params.required || false;
    this.isValidating = params.validate !== false;
    this.defaultValue = params.defaultValue || "";
    this.value = this.defaultValue;
    this.isValid = true;
    this.defaultErrorType = this.isRequired ? ERROR_REQUIRED : undefined;
    this.errorType = this.defaultErrorType;
    this.message = "";
    this.onChange = changeField.bind(this);
    this.setValue = setValue.bind(this);
    this.validate = validateField.bind(this);
    this.clear = clearField.bind(this);
    this.setError = setFieldError.bind(this);
  }
}
function changeField(this: FormField, e: ChangeEvent<HTMLInputElement>) {
  this.value = e.currentTarget.value || "";
  this.isValid = true;
  this._updateField();
}
function setValue(this: FormField, value: string) {
  this.value = value;
  this.isValid = true;
  this._updateField();
}
function validateField(this: FormField) {
  let isValid = false;
  let errorType: FormFieldErrorType;
  if (this.value) {
    if (!this.isValidating || !this.type || !validations[this.type])
      isValid = true;
    else if (validations[this.type](this.value)) isValid = true;
    else errorType = ERROR_INCORRECT;
  } else {
    if (this.isRequired) errorType = ERROR_REQUIRED;
    else isValid = true;
  }
  this.isValid = isValid;
  this.errorType = isValid ? undefined : errorType;
  this.message =
    errorType && this.type && fieldMessages[this.type]
      ? fieldMessages[this.type][errorType]
      : "";
  let isError = !isValid;
  this._updateField();
  return isError ? errorType : undefined;
}
function clearField(this: FormField) {
  this.value = this.defaultValue;
  this.isValid = true;
  this.errorType = this.defaultErrorType;
  this.message = "";
  this._updateField();
}
function setFieldError(this: FormField, message: string) {
  this.isValid = false;
  if (message) this.message = message;
  this._updateField();
}
