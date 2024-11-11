import { render } from "@testing-library/react";
import DesktopFooter from "../../components/desktop-footer"; // Adjust path as needed

type FooterTestContext = {
  footer: () => HTMLElement;
  logo: () => HTMLElement;
  cafeLink: () => HTMLElement;
  shopLink: () => HTMLElement;
  consultationLink: () => HTMLElement;
  impressumLink: () => HTMLElement;
  datenschutzLink: () => HTMLElement;
  agbLink: () => HTMLElement;
  facebookLink: () => HTMLElement;
  instagramLink: () => HTMLElement;
};

describe("DesktopFooter Component", () => {
  const createComponent = (): FooterTestContext => {
    const { getByTestId, getByText } = render(<DesktopFooter />);

    return {
      footer: () => getByTestId("footer"),
      logo: () => getByTestId("footer-logo"),
      cafeLink: () => getByText("Café"),
      shopLink: () => getByText("Shop"),
      consultationLink: () => getByText("Beratung"),
      impressumLink: () => getByTestId("nav-link-impressum"),
      datenschutzLink: () => getByTestId("nav-link-datenschutz"),
      agbLink: () => getByText("AGB"),
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

  test("should render the 'Café' link", () => {
    const { cafeLink } = createComponent();
    expect(cafeLink()).toBeInTheDocument();
  });

  test("should render the 'Shop' link", () => {
    const { shopLink } = createComponent();
    expect(shopLink()).toBeInTheDocument();
  });

  test("should render the 'Beratung' link", () => {
    const { consultationLink } = createComponent();
    expect(consultationLink()).toBeInTheDocument();
  });

  test("should render the 'Impressum' link with correct href", () => {
    const { impressumLink } = createComponent();
    expect(impressumLink()).toHaveAttribute("href", "/impressum");
  });

  test("should render the 'Datenschutz' link with correct href", () => {
    const { datenschutzLink } = createComponent();
    expect(datenschutzLink()).toHaveAttribute("href", "/datenschutz");
  });

  test("should render the 'AGB' link", () => {
    const { agbLink } = createComponent();
    expect(agbLink()).toBeInTheDocument();
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
