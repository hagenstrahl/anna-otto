interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string;
  type: HeadingType;
  className?: string;
}

export enum HeadingType {
  H1,
  H2,
  H3,
}

const Heading = ({
  children,
  type,
  className,
  ...props
}: HeadingProps): JSX.Element => {
  switch (type) {
    case HeadingType.H1:
      return (
        <h1
          className={`text-center text-5xl font-heading text-orange mb-8 ${className}`}
          {...props} // Spread props here
        >
          {children}
        </h1>
      );
    case HeadingType.H2:
      return (
        <h2
          className={`text-3xl font-heading text-orange mb-6 ${className}`}
          {...props} // Spread props here
        >
          {children}
        </h2>
      );
    case HeadingType.H3:
      return (
        <h3
          className={`text-center text-2xl font-heading text-orange mb-4 ${className}`}
          {...props} // Spread props here
        >
          {children}
        </h3>
      );
    default:
      throw new Error(`Heading type ${type} is not implemented.`);
  }
};

export default Heading;
