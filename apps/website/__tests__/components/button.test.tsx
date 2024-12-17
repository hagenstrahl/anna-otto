import { render } from "@testing-library/react";
import { Map } from "iconoir-react";
import Button, { ButtonProps } from "../../components/button";

type ButtonTestContext = {
  button: () => HTMLElement;
  buttonIcon: () => HTMLElement | undefined;
};

describe("Button", () => {
  const createComponent = (props?: Partial<ButtonProps>): ButtonTestContext => {
    const propsWithDefaults: ButtonProps = {
      variant: "primary",
      children: "test",
      testId: "test",
      ...props,
    };
    const { getByTestId } = render(<Button {...propsWithDefaults} />);
    return {
      button: () => getByTestId("test-button"),
      buttonIcon: () =>
        propsWithDefaults.icon ? getByTestId("test-button-icon") : undefined,
    };
  };

  test("should render without crashing", () => {
    const { button } = createComponent();
    expect(button()).toBeTruthy();
  });

  test("should not add data-testid attribute", () => {
    const { container } = render(<Button variant={"primary"}>{"test"}</Button>);
    expect(container.querySelector("button")).not.toHaveAttribute(
      "data-testid"
    );
  });

  test("should render primary button with correct classes", () => {
    const { button } = createComponent();
    expect(button()).toHaveClass("text-white hover:bg-gruen bg-blau");
  });

  test("should render secondary button with correct classes", () => {
    const { button } = createComponent({
      variant: "secondary",
      children: "secondary",
    });
    expect(button()).toHaveClass(
      "text-blau border border-blau hover:text-gruen hover:border-gruen bg-white"
    );
  });

  test("should render button with correct text content", () => {
    const { button } = createComponent();
    expect(button()).toHaveTextContent("test");
  });

  test("should render button with correct icon", () => {
    const { buttonIcon } = createComponent({
      icon: Map,
      variant: "primary",
      children: "Map",
    });
    expect(buttonIcon).toBeTruthy();
  });
});
