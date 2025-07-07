import { render, screen } from "@testing-library/react";
import MobileMenu from "../../components/mobile-menu";

type MenuTestContext = {
  toggleButton: () => HTMLElement;
  menuIcon: () => HTMLElement;
  closeIcon: () => HTMLElement;
  menuNav: () => HTMLElement;
};

describe("MobileMenu Component", () => {
  const createComponent = (): MenuTestContext => {
    const { getByTestId } = render(<MobileMenu />);
    return {
      toggleButton: () => screen.getByRole("button"),
      menuIcon: () => getByTestId("menu-icon"),
      closeIcon: () => getByTestId("close-icon"),
      menuNav: () => getByTestId("mobile-menu-nav"),
    };
  };

  test("should render toggle button", () => {
    const { toggleButton } = createComponent();
    expect(toggleButton).toBeInTheDocument();
  });
});
