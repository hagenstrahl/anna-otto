import { render } from "@testing-library/react";
import DesktopFooter from "../../components/desktop-footer";

type FooterTestContext = {
  footer: () => HTMLElement;
  logo: () => HTMLElement;
  impressumLink: () => HTMLElement;
  datenschutzLink: () => HTMLElement;
  facebookLink: () => HTMLElement;
  instagramLink: () => HTMLElement;
};

describe("DesktopFooter Component", () => {
  const createComponent = (): FooterTestContext => {
    const { getByTestId } = render(<DesktopFooter />);

    return {
      footer: () => getByTestId("footer"),
      logo: () => getByTestId("footer-logo"),
      impressumLink: () => getByTestId("nav-link-impressum"),
      datenschutzLink: () => getByTestId("nav-link-datenschutz"),
      facebookLink: () => getByTestId("facebook-link"),
      instagramLink: () => getByTestId("instagram-link"),
    };
  };

  test("should render without crashing", () => {
    const { footer } = createComponent();
    expect(footer()).toBeTruthy();
  });

  test("should render the logo with correct alt text", () => {
    const { logo } = createComponent();
    expect(logo().querySelector("img")).toHaveAttribute(
      "alt",
      "Anna und Otto - Das Familiencafe Logo"
    );
  });

  test("should render the 'Impressum' link with correct href", () => {
    const { impressumLink } = createComponent();
    expect(impressumLink()).toHaveAttribute("href", "/impressum");
  });

  test("should render the 'Datenschutz' link with correct href", () => {
    const { datenschutzLink } = createComponent();
    expect(datenschutzLink()).toHaveAttribute("href", "/datenschutz");
  });

  test("should render the facebook link with the correct href", () => {
    const { facebookLink } = createComponent();
    expect(facebookLink()).toHaveAttribute(
      "href",
      "https://www.facebook.com/annaundotto/?locale=de_DE"
    );
  });

  test("should render the instagram link with the correct href", () => {
    const { instagramLink } = createComponent();
    expect(instagramLink()).toHaveAttribute(
      "href",
      "https://www.instagram.com/anna_und_otto/"
    );
  });
});
