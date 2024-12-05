import { render } from "@testing-library/react";
import ExternalLink, {
  ExternalLinkProps,
} from "../../components/external-link";

type ExternalLinkTestContext = {
  link: () => HTMLElement;
};

describe("ExternalLink Component", () => {
  const createComponent = (
    props?: ExternalLinkProps
  ): ExternalLinkTestContext => {
    const propsWithDefaults: ExternalLinkProps = {
      href: "https://test.com",
      children: "test",
      testId: "test-link",
      ...props,
    };
    const { getByTestId } = render(
      <ExternalLink
        href={propsWithDefaults.href}
        className={propsWithDefaults.className}
        testId={propsWithDefaults.testId}
      >
        {propsWithDefaults.children}
      </ExternalLink>
    );
    return {
      link: () => getByTestId("test-link"),
    };
  };

  test("should render without crashing", () => {
    const { link } = createComponent();
    expect(link()).toBeTruthy();
  });

  test("should render link with correct href", () => {
    const { link } = createComponent({
      children: "test",
      href: "https://example.com",
    });
    expect(link()).toHaveAttribute("href", "https://example.com");
  });

  test("should render mailto link without target or rel attributes", () => {
    const { link } = createComponent({
      children: "test",
      href: "mailto: test@test.com",
    });
    expect(link()).toHaveAttribute("href", "mailto: test@test.com");
    expect(link()).not.toHaveAttribute("target");
    expect(link()).not.toHaveAttribute("rel");
  });
  test("should render tel link without target or rel attributes", () => {
    const { link } = createComponent({
      children: "test",
      href: "tel: +49123456",
    });
    expect(link()).toHaveAttribute("href", "tel: +49123456");
    expect(link()).not.toHaveAttribute("target");
    expect(link()).not.toHaveAttribute("rel");
  });
  test("should apply custom className", () => {
    const { link } = createComponent({
      href: "https://example.com",
      className: "custom-class",
      children: "test",
    });
    expect(link()).toHaveClass("custom-class");
  });
  test("should render children correctly", () => {
    const { link } = createComponent({
      href: "https://example.com",
      children: "Click Here",
    });
    expect(link()).toHaveTextContent("Click Here");
  });
  test("should not add data-testid attribute if not provided", () => {
    const { container } = render(
      <ExternalLink href="https://example.com">Example</ExternalLink>
    );
    expect(container.querySelector("a")).not.toHaveAttribute("data-testid");
  });
});
