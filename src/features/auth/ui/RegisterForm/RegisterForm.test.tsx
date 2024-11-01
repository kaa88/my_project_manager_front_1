import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockMatchMedia } from "../../../../shared/mocks/mockMatchMedia";
import { RegisterForm } from "./RegisterForm";

jest.setTimeout(10000);

type Elems =
  | "inputEmail"
  | "inputPassword"
  | "inputConfirmPassword"
  | "submitButton";

const elems: { [key in Elems]?: any } = {};
const onSubmit = jest.fn();

const CORRECT_EMAIL = "abc@example.com";
const CORRECT_PASSWORD = "12.%QwErTy";

beforeEach(() => {
  mockMatchMedia();
  render(<RegisterForm onSubmit={onSubmit} />);

  elems.inputEmail = screen.getByTestId("email");
  elems.inputPassword = screen.getByTestId("password");
  elems.inputConfirmPassword = screen.getByTestId("confirmPassword");
  elems.submitButton = screen.getByTestId("submit");
});

afterEach(() => jest.clearAllMocks());

describe("RegisterForm.test", () => {
  test("all form elements exist in DOM", () => {
    expect(elems.inputEmail).toBeInTheDocument();
    expect(elems.inputPassword).toBeInTheDocument();
    expect(elems.inputConfirmPassword).toBeInTheDocument();
    expect(elems.submitButton).toBeInTheDocument();
  });

  test("submit form when all fields are valid", async () => {
    await userEvent.type(elems.inputEmail, CORRECT_EMAIL);
    await userEvent.type(elems.inputPassword, CORRECT_PASSWORD);
    await userEvent.type(elems.inputConfirmPassword, CORRECT_PASSWORD);
    await userEvent.click(elems.submitButton);
    expect(elems.inputEmail).toHaveValue(CORRECT_EMAIL);
    expect(elems.inputPassword).toHaveValue(CORRECT_PASSWORD);
    expect(elems.inputConfirmPassword).toHaveValue(CORRECT_PASSWORD);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  describe("email validation", () => {
    beforeEach(async () => {
      await userEvent.type(elems.inputPassword, CORRECT_PASSWORD);
      await userEvent.type(elems.inputConfirmPassword, CORRECT_PASSWORD);
    });

    test("show error when empty", async () => {
      await userEvent.click(elems.submitButton);
      expect(onSubmit).toHaveBeenCalledTimes(0);
      await waitFor(() => {
        expect(screen.getByText(/required/i)).toBeInTheDocument();
      });
    });

    test("show error when incorrect", async () => {
      const type = async (value: string) => {
        await userEvent.clear(elems.inputEmail);
        await userEvent.type(elems.inputEmail, value);
        await userEvent.click(elems.submitButton);
        expect(elems.inputEmail).toHaveValue(value);
        expect(onSubmit).toHaveBeenCalledTimes(0);
        await waitFor(() => {
          expect(screen.getByText(/incorrect/i)).toBeInTheDocument();
        });
      };

      await type("abc.example.com");
      await type("abc@example");
    });
  });

  describe("password validation", () => {
    beforeEach(async () => {
      await userEvent.type(elems.inputEmail, CORRECT_EMAIL);
    });

    test("show error when empty", async () => {
      await userEvent.type(elems.inputConfirmPassword, "A");
      await userEvent.click(elems.submitButton);
      expect(onSubmit).toHaveBeenCalledTimes(0);

      await waitFor(() => {
        expect(screen.getByText(/required/i)).toBeInTheDocument();
      });
    });

    test("show error when incorrect", async () => {
      const type = async (value: string, errorText: string | RegExp) => {
        await userEvent.clear(elems.inputPassword);
        await userEvent.type(elems.inputPassword, value);

        await userEvent.clear(elems.inputConfirmPassword);
        await userEvent.type(elems.inputConfirmPassword, value);

        await userEvent.click(elems.submitButton);

        expect(elems.inputPassword).toHaveValue(value);
        expect(onSubmit).toHaveBeenCalledTimes(0);
        await waitFor(() => {
          expect(screen.getByText(errorText)).toBeInTheDocument();
        });
      };

      await type("1234", /password length/i);
      await type("Passwrd0", /password must contain/i);
      await type("%pass555", /password must contain/i);
      await type("$PassWrd", /password must contain/i);
    });
  });

  describe("confirm password validation", () => {
    beforeEach(async () => {
      await userEvent.type(elems.inputEmail, CORRECT_EMAIL);
      await userEvent.type(elems.inputPassword, CORRECT_PASSWORD);
    });

    test("show error when empty", async () => {
      await userEvent.click(elems.submitButton);
      expect(onSubmit).toHaveBeenCalledTimes(0);

      await waitFor(() => {
        expect(screen.getByText(/required/i)).toBeInTheDocument();
      });
    });

    test("show error when passwords not equal", async () => {
      await userEvent.type(elems.inputConfirmPassword, "QwErTy12.%");
      await userEvent.click(elems.submitButton);
      expect(onSubmit).toHaveBeenCalledTimes(0);

      await waitFor(() => {
        expect(screen.getByText(/not equal/i)).toBeInTheDocument();
      });
    });
  });
});
