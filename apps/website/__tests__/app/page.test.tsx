import { render } from "@testing-library/react";
import Home from "../../app/page";

describe("Home", () => {
  test("renders without crashing", () => {
    render(<Home />);
  });
});
