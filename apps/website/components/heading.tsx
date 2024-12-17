import { ClassNameProps, getTestIdValue, TestIdProps } from "./utils";

export interface HeadingProps extends ClassNameProps, TestIdProps {
  children: string;
  variant: HeadingVariant;
}

export enum HeadingVariant {
  H1,
  H2,
  H3,
}

const Heading = ({
  children,
  variant,
  className,
  testId,
}: HeadingProps): JSX.Element => {
  switch (variant) {
    case HeadingVariant.H1:
      return (
        <h1
          className={`text-center text-5xl font-heading text-orange mb-8 ${className}`}
          data-testid={getTestIdValue(testId, "heading")}
        >
          {children}
        </h1>
      );
    case HeadingVariant.H2:
      return (
        <h2
          className={`text-3xl font-heading text-orange mb-6 ${className}`}
          data-testid={getTestIdValue(testId, "heading")}
        >
          {children}
        </h2>
      );
    case HeadingVariant.H3:
      return (
        <h3
          className={`text-center text-2xl font-heading text-orange mb-4 ${className}`}
          data-testid={getTestIdValue(testId, "heading")}
        >
          {children}
        </h3>
      );
    default:
      throw new Error(`Heading variant ${variant} is not implemented.`);
  }
};

export default Heading;
