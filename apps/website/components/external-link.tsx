import { ClassNameProps, getTestIdValue, TestIdProps } from "./utils";
export interface ExternalLinkProps extends ClassNameProps, TestIdProps {
  href: string;
  children: JSX.Element[] | JSX.Element | string;
}

const ExternalLink = ({
  href,
  className = "",
  children,
  testId = "heading",
}: ExternalLinkProps): JSX.Element => {
  if (href.includes("mailto:") || href.includes("tel:")) {
    return (
      <a
        className={`${className}`}
        href={href}
        data-testid={getTestIdValue(testId, "link")}
      >
        {children}
      </a>
    );
  } else {
    return (
      <a
        className={`${className}`}
        href={href}
        target="_blank"
        rel="noreferrer"
        data-testid={getTestIdValue(testId, "link")}
      >
        {children}
      </a>
    );
  }
};

export default ExternalLink;
