import { render } from "@testing-library/react";
import { Map } from "iconoir-react";
import Button, { ButtonProps } from "../../components/button";

type ButtonTestContext = {
  button: HTMLElement;
  buttonIcon: HTMLElement | undefined;
};

describe("Button", () => {
  const createComponent = (
    props: ButtonProps = { type: "primary", children: "test" }
  ): ButtonTestContext => {
    const { getByTestId } = render(
      <Button type={props.type} icon={props.icon} className={props.className}>
        {props.children}
      </Button>
    );
    return {
      button: getByTestId("button"),
      buttonIcon: props.icon ? getByTestId("button-icon") : undefined,
    };
  };

  test("should render without crashing", () => {
    const { button } = createComponent();
    expect(button).toBeTruthy();
  });

  test("should render primary button with correct classes", () => {
    const { button } = createComponent();
    expect(button).toHaveClass("text-white hover:bg-gruen bg-blau");
  });

  test("should render secondary button with correct classes", () => {
    const { button } = createComponent({
      type: "secondary",
      children: "secondary",
    });
    expect(button).toHaveClass(
      "text-blau border border-blau hover:text-gruen hover:border-gruen bg-white"
    );
  });

  test("should render button with correct text content", () => {
    const { button } = createComponent();
    expect(button).toHaveTextContent("test");
  });

  test("should render button with correct icon", () => {
    const { buttonIcon } = createComponent({
      icon: Map,
      type: "primary",
      children: "Map",
    });
    expect(buttonIcon).toBeTruthy();
  });
});
