import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src: _src, alt, className }) => {
    return <img src={alt} alt={alt} className={className} />;
  },
}));
