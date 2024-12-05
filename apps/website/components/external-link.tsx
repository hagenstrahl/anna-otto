export interface ExternalLinkProps {
  href: string;
  className?: string;
  children: JSX.Element[] | JSX.Element | string;
  testId?: string;
}

const ExternalLink = ({
  href,
  className = "",
  children,
  testId,
}: ExternalLinkProps): JSX.Element => {
  if (href.includes("mailto:") || href.includes("tel:")) {
    return (
      <a className={` ${className}`} href={href} data-testid={testId}>
        {children}
      </a>
    );
  } else {
    return (
      <a
        className={` ${className}`}
        href={href}
        target="_blank"
        rel="noreferrer"
        data-testid={testId}
      >
        {children}
      </a>
    );
  }
};

export default ExternalLink;
