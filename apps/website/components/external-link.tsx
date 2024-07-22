interface ExternalLinkProps {
  href: string;
  className?: string;
  children: JSX.Element[] | JSX.Element | string;
}

const ExternalLink = ({
  href,
  className = "",
  children,
}: ExternalLinkProps): JSX.Element => {
  if (href.includes("mailto:") || href.includes("tel:")) {
    return (
      <a
        className={`text-orange hover:text-dark-orange ${className}`}
        href={href}
      >
        {children}
      </a>
    );
  } else {
    return (
      <a
        className={`text-orange hover:text-dark-orange ${className}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }
};

export default ExternalLink;
