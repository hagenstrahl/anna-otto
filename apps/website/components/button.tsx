import { iconHeight } from "../libs/constants";
import { ClassNameProps, getTestIdValue, TestIdProps } from "./utils";

export interface ButtonProps extends ClassNameProps, TestIdProps {
  children: string;
  icon?: React.ElementType;
  variant: "primary" | "secondary";
}

const Button = ({
  children,
  className = "",
  icon: Icon,
  variant,
  testId,
}: ButtonProps): JSX.Element => {
  let typeClasses = "";
  if (variant === "primary") {
    typeClasses = "text-white hover:bg-gruen bg-blau";
  } else if (variant === "secondary") {
    typeClasses =
      "text-blau border border-blau hover:text-gruen hover:border-gruen bg-white";
  }

  return (
    <button
      className={`px-5 rounded-3xl font-text min-h-12 flex items-center ${typeClasses} ${className}`}
      data-testid={getTestIdValue(testId, "button")}
    >
      {Icon && (
        <Icon
          height={iconHeight}
          width={iconHeight}
          className="mr-2"
          data-testid={getTestIdValue(testId, "button-icon")}
        />
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
