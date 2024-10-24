import { cleanup, render } from "@testing-library/react";
import React from "react";
import FeatureSection from "../../components/feature-section";

jest.mock("../../components/button", () => {
  return function MockButton({ children }: { children: React.ReactNode }) {
    return <button data-testid="button">{children}</button>;
  };
});

jest.mock("../../components/heading", () => {
  return {
    __esModule: true,
    default: function MockHeading({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) {
      return (
        <h2 data-testid="heading" className={className}>
          {children}
        </h2>
      );
    },
    HeadingType: {
      H2: "h2",
    },
  };
});

type FeatureSectionTestContext = {
  section: HTMLElement;
  heading: HTMLElement;
  content: HTMLElement;
  button: HTMLElement;
};

describe("FeatureSection", () => {
  afterEach(cleanup);

  const createComponent = (
    props = {
      title: "Test Title",
      content: "Test Content",
      buttonText: "Click Me",
      alignment: "left" as "left" | "right",
    }
  ): FeatureSectionTestContext => {
    const { getByTestId } = render(
      <FeatureSection
        title={props.title}
        content={props.content}
        buttonText={props.buttonText}
        alignment={props.alignment}
      />
    );
    return {
      section: getByTestId("feature-section"),
      heading: getByTestId("heading"),
      content: getByTestId("content"),
      button: getByTestId("button"),
    };
  };

  test("should render without crashing", () => {
    const { section } = createComponent();
    expect(section).toBeTruthy();
  });

  test("should render with left alignment", () => {
    const { section, heading, content } = createComponent();
    expect(section).not.toHaveClass("ml-auto mr-10");
    expect(heading.className).toContain("text-left");
    expect(content.className).toContain("text-left");
  });

  test("should render with right alignment", () => {
    const { section, heading, content } = createComponent({
      title: "Right Title",
      content: "Right Content",
      buttonText: "Right Button",
      alignment: "right",
    });
    expect(section).toHaveClass("ml-auto mr-10");
    expect(heading.className).toContain("text-right");
    expect(content.className).toContain("text-right");
  });

  test("should render correct content", () => {
    const { heading, content, button } = createComponent();
    expect(heading).toHaveTextContent("Test Title");
    expect(content).toHaveTextContent("Test Content");
    expect(button).toHaveTextContent("Click Me");
  });

  test("should align button with left alignment", () => {
    const { button } = createComponent({
      title: "Test Title",
      content: "Test Content",
      buttonText: "Click Me",
      alignment: "left",
    });
    const buttonContainer = button.parentElement;
    expect(buttonContainer).not.toHaveClass("flex");
    expect(buttonContainer).not.toHaveClass("justify-end");
  });

  test("should align button with right alignment", () => {
    const { button } = createComponent({
      title: "Right Title",
      content: "Right Content",
      buttonText: "Right Button",
      alignment: "right",
    });
    const buttonContainer = button.parentElement;
    expect(buttonContainer).toHaveClass("flex");
    expect(buttonContainer).toHaveClass("justify-end");
  });
});
