import { cleanup, render } from "@testing-library/react";
import Card from "../../components/card";

type CardTestContext = {
  section: HTMLElement;
  heading: HTMLElement;
  content: HTMLElement;
  button: HTMLElement;
};

describe("Card Component", () => {
  afterEach(cleanup);

  const createComponent = (
    props = {
      title: "Sample Title",
      content: "Sample Content",
      buttonText: "Click Here",
      alignment: "left" as "left" | "right",
    }
  ): CardTestContext => {
    const { getByTestId } = render(
      <Card
        title={props.title}
        content={props.content}
        buttonText={props.buttonText}
        alignment={props.alignment}
      />
    );
    return {
      section: getByTestId("card"),
      heading: getByTestId("card-heading"),
      content: getByTestId("card-content"),
      button: getByTestId("card-button"),
    };
  };

  test("should without crashing", () => {
    const { section } = createComponent();
    expect(section).toBeTruthy();
  });

  test("should apply correct left alignment styling", () => {
    const { section, heading, content } = createComponent();
    expect(section).not.toHaveClass("ml-auto mr-10");
    expect(heading.className).toContain("text-left");
    expect(content.className).toContain("text-left");
  });

  test("should apply correct right alignment styling", () => {
    const { section, heading, content } = createComponent({
      title: "Right Aligned Title",
      content: "Right Aligned Content",
      buttonText: "Aligned Button",
      alignment: "right",
    });
    expect(section).toHaveClass("ml-auto mr-10");
    expect(heading.className).toContain("text-right");
    expect(content.className).toContain("text-right");
  });

  test("should render provided title, content, and button text", () => {
    const { heading, content, button } = createComponent();
    expect(heading).toHaveTextContent("Sample Title");
    expect(content).toHaveTextContent("Sample Content");
    expect(button).toHaveTextContent("Click Here");
  });

  test("should allign button container left when alignment is left", () => {
    const { button } = createComponent();
    const buttonContainer = button.parentElement;
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
    const buttonContainer = button.parentElement;
    expect(buttonContainer).toHaveClass("flex");
    expect(buttonContainer).toHaveClass("justify-end");
  });
});
