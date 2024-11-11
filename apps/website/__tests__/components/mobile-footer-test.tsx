import { render } from "@testing-library/react";
import MobileStickyFooter from "../../components/mobile-footer";

type FooterTestContext = {
  footer: () => HTMLElement;
  phoneLink: () => HTMLElement;
  mailLink: () => HTMLElement;
  mapLink: () => HTMLElement;
  facebookLink: () => HTMLElement;
  instagramLink: () => HTMLElement;
};

describe("MobileStickyFooter Component", () => {
  const createComponent = (): FooterTestContext => {
    const { getByTestId } = render(<MobileStickyFooter />);

    return {
      footer: () => getByTestId("footer"),
      phoneLink: () => getByTestId("phone-link"),
      mailLink: () => getByTestId("mail-link"),
      mapLink: () => getByTestId("map-link"),
      facebookLink: () => getByTestId("facebook-link"),
      instagramLink: () => getByTestId("instagram-link"),
    };
  };

  test("should render without crashing", () => {
    const { footer } = createComponent();
    expect(footer()).toBeTruthy();
  });

  test("should render phone link with correct href", () => {
    const { phoneLink } = createComponent();
    expect(phoneLink()).toHaveAttribute("href", "tel:+4939812293575");
  });

  test("should render mail link with correct href", () => {
    const { mailLink } = createComponent();
    expect(mailLink()).toHaveAttribute("href", "mailto:post@anna-otto.de");
  });

  test("should render the map link with correct href", () => {
    const { mapLink } = createComponent();
    expect(mapLink()).toHaveAttribute(
      "href",
      "https://www.google.de/maps/dir//Markt+15,+17235+Neustrelitz"
    );
  });

  test("should render facebook link with the correct href", () => {
    const { facebookLink } = createComponent();
    expect(facebookLink()).toHaveAttribute(
      "href",
      "https://www.facebook.com/annaundotto/?locale=de_DE"
    );
  });

  test("should render instagram link with the correct href", () => {
    const { instagramLink } = createComponent();
    expect(instagramLink()).toHaveAttribute(
      "href",
      "https://www.instagram.com/anna_und_otto/"
    );
  });
});
