import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
  icon?: React.ElementType;
  type: "primary" | "secondary";
}

const Button = ({
  children,
  className = "",
  icon: Icon,
  type,
  ...props
}: ButtonProps): JSX.Element => {
  let typeClasses = "";
  if (type === "primary") {
    typeClasses = "text-white hover:bg-gruen bg-blau";
  } else if (type === "secondary") {
    typeClasses =
      "text-blau border border-blau hover:text-gruen hover:border-gruen bg-white";
  }

  return (
    <button
      className={`px-5 rounded-3xl font-text min-h-12 flex items-center ${typeClasses} ${className}`}
      {...props} // Spread props here
    >
      {Icon && (
        <Icon
          height={24}
          width={24}
          className="mr-2"
          data-testid="button-icon"
        />
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
