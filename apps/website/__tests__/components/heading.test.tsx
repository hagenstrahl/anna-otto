import { render, screen } from "@testing-library/react";
import Heading, {
  HeadingProps,
  HeadingVariant,
} from "../../components/heading";

type HeadingTestContext = {
  heading: () => HTMLElement;
};

describe("Heading Component", () => {
  const createComponent = (
    props?: Partial<HeadingProps>
  ): HeadingTestContext => {
    const propsWithDefaults: HeadingProps = {
      variant: HeadingVariant.H1,
      children: "test",
      testId: "test",
      ...props,
    };

    const { getByTestId } = render(
      <Heading {...propsWithDefaults}>{propsWithDefaults.children}</Heading>
    );

    return {
      heading: () => getByTestId("test-heading"),
    };
  };
  test("should render without crashing", () => {
    const { heading } = createComponent();
    expect(heading()).toBeTruthy();
  });

  test("should render H1 with correct classes", () => {
    const { heading } = createComponent();
    expect(heading().tagName).toBe("H1");
    expect(heading()).toHaveClass(
      "text-center text-5xl font-heading text-orange mb-8"
    );
  });

  test("should render H2 with correct classes", () => {
    const { heading } = createComponent({
      variant: HeadingVariant.H2,
      children: "H2 test",
      testId: "test",
    });
    expect(heading().tagName).toBe("H2");
    expect(heading()).toHaveClass("text-3xl font-heading text-orange mb-6");
    expect(heading()).toHaveTextContent("H2 test");
  });

  test("should render H3 with correct classes", () => {
    const { heading } = createComponent({
      variant: HeadingVariant.H3,
      children: "H3 test",
      testId: "test",
    });
    expect(heading().tagName).toBe("H3");
    expect(heading()).toHaveClass(
      "text-center text-2xl font-heading text-orange mb-4"
    );
    expect(heading()).toHaveTextContent("H3 test");
  });

  test("should throw an error for unsupported variant", () => {
    expect(() =>
      createComponent({
        variant: "foo" as unknown as HeadingVariant,
        children: "Error Heading",
      })
    ).toThrow("Heading variant foo is not implemented.");
  });
  test("should not add data-testid attribute if not provided", () => {
    render(<Heading variant={HeadingVariant.H1}>Test Heading</Heading>);
    const headingElement = screen.getByText("Test Heading");
    expect(headingElement).not.toHaveAttribute("data-testid");
  });
});
