import { render } from "@testing-library/react";
import Button from "../../components/button";

describe("Button", () => {
  test("renders without crashing", () => {
    const { container } = render(<Button type="primary">test</Button>);
    const element = container.querySelector("button");
    expect(element).toHaveClass("px-5");
    expect(element).toHaveTextContent("test");
  });
});
