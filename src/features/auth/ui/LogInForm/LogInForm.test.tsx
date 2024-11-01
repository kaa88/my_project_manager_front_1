import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockMatchMedia } from "../../../../shared/mocks/mockMatchMedia";
import { LogInForm } from "./LogInForm";

type Elems = "inputEmail" | "inputPassword" | "submitButton";

const elems: { [key in Elems]?: any } = {};
const onSubmit = jest.fn();

const CORRECT_EMAIL = "abc@example.com";
const CORRECT_PASSWORD = "1234";

beforeEach(() => {
  mockMatchMedia();
  render(<LogInForm onSubmit={onSubmit} />);

  elems.inputEmail = screen.getByTestId("email");
  elems.inputPassword = screen.getByTestId("password");
  elems.submitButton = screen.getByTestId("submit");
});

afterEach(() => jest.clearAllMocks());

describe("LogInForm.test", () => {
  test("all form elements exist in DOM", () => {
    expect(elems.inputEmail).toBeInTheDocument();
    expect(elems.inputPassword).toBeInTheDocument();
    expect(elems.submitButton).toBeInTheDocument();
  });

  test("submit form when all fields are valid", async () => {
    await userEvent.type(elems.inputEmail, CORRECT_EMAIL);
    await userEvent.type(elems.inputPassword, CORRECT_PASSWORD);
    await userEvent.click(elems.submitButton);
    expect(elems.inputEmail).toHaveValue(CORRECT_EMAIL);
    expect(elems.inputPassword).toHaveValue(CORRECT_PASSWORD);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  describe("email validation", () => {
    beforeEach(async () => {
      await userEvent.type(elems.inputPassword, CORRECT_PASSWORD);
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
      await userEvent.click(elems.submitButton);
      expect(onSubmit).toHaveBeenCalledTimes(0);

      await waitFor(() => {
        expect(screen.getByText(/required/i)).toBeInTheDocument();
      });
    });
  });
});
