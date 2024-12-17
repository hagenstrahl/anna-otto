import { render } from "@testing-library/react";
import Card, { CardProps } from "../../components/card";

type CardTestContext = {
  section: () => HTMLElement;
  heading: () => HTMLElement;
  content: () => HTMLElement;
  button: () => HTMLElement;
};

describe("Card Component", () => {
  const createComponent = (props?: Partial<CardProps>): CardTestContext => {
    const propsWithDefaults: CardProps = {
      title: "Sample Title",
      content: "Sample Content",
      buttonText: "Click Here",
      alignment: "left" as "left" | "right",
      testId: "test",
      ...props,
    };

    const { getByTestId } = render(<Card {...propsWithDefaults} />);
    return {
      section: () => getByTestId("card"),
      heading: () => getByTestId("test-heading"),
      content: () => getByTestId("card-content"),
      button: () => getByTestId("test-button"),
    };
  };

  test("should render without crashing", () => {
    const { section } = createComponent();
    expect(section()).toBeTruthy();
  });

  test("should apply correct left alignment styling", () => {
    const { heading, content } = createComponent();
    expect(heading().className).toContain("text-left");
    expect(content().className).toContain("text-left");
  });

  test("should apply correct right alignment styling", () => {
    const { heading, content } = createComponent({
      title: "Right Aligned Title",
      content: "Right Aligned Content",
      buttonText: "Aligned Button",
      alignment: "right",
    });
    expect(heading().className).toContain("text-right");
    expect(content().className).toContain("text-right");
  });

  test("should render provided title, content, and button text", () => {
    const { heading, content, button } = createComponent();
    expect(heading()).toHaveTextContent("Sample Title");
    expect(content()).toHaveTextContent("Sample Content");
    expect(button()).toHaveTextContent("Click Here");
  });

  test("should allign button container left when alignment is left", () => {
    const { button } = createComponent();
    const buttonContainer = button().parentElement;
    expect(buttonContainer).not.toHaveClass("flex");
    expect(buttonContainer).not.toHaveClass("justify-end");
  });

  test("should allign button container right when alignment is right", () => {
    const { button } = createComponent({
      title: "Aligned Title",
      content: "Aligned Content",
      buttonText: "Right Aligned",
      alignment: "right",
    });
    const buttonContainer = button().parentElement;
    expect(buttonContainer).toHaveClass("flex");
    expect(buttonContainer).toHaveClass("justify-end");
  });
});
