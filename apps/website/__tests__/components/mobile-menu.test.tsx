import { fireEvent, render, waitFor } from "@testing-library/react";
import MobileMenu from "../../components/mobile-menu";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: any; // for any other props
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock("framer-motion", () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  },
}));

type MobileMenuTestContext = {
  menuButton: () => HTMLElement;
  getMenuIcon: () => HTMLElement | null;
  getCloseIcon: () => HTMLElement | null;
  getMobileNav: () => HTMLElement | null;
};

describe("MobileMenu Component", () => {
  const createComponent = (): MobileMenuTestContext => {
    const { getByTestId, queryByTestId } = render(<MobileMenu />);
    return {
      menuButton: () =>
        getByTestId("menu-icon").closest("button") as HTMLElement,
      getMenuIcon: () => queryByTestId("menu-icon"),
      getCloseIcon: () => queryByTestId("close-icon"),
      getMobileNav: () => queryByTestId("mobile-menu-nav"),
    };
  };

  test("should render the menu button with menu icon initially", () => {
    const { getMenuIcon, getCloseIcon, getMobileNav } = createComponent();

    expect(getMenuIcon()).toBeInTheDocument();
    expect(getCloseIcon()).not.toBeInTheDocument();
    expect(getMobileNav()).not.toBeInTheDocument();
  });

  test("should open the menu and show close icon when clicked", async () => {
    const { menuButton, getMenuIcon, getCloseIcon, getMobileNav } =
      createComponent();

    fireEvent.click(menuButton());

    await waitFor(() => {
      expect(getMobileNav()).toBeInTheDocument();
      expect(getCloseIcon()).toBeInTheDocument();
      expect(getMenuIcon()).not.toBeInTheDocument();
    });
  });

  test("should close the menu when a nav link is clicked", async () => {
    const { menuButton, getMobileNav } = createComponent();

    fireEvent.click(menuButton());

    await waitFor(() => {
      expect(getMobileNav()).toBeInTheDocument();
    });

    const link = getMobileNav()?.querySelector("a");
    expect(link).toBeTruthy();

    if (link) {
      fireEvent.click(link);
      await waitFor(() => {
        expect(getMobileNav()).not.toBeInTheDocument();
      });
    } else {
      throw new Error(
        "Expected navigation link to be present, but it was not found."
      );
    }
  });
});
