interface ButtonProps {
  children: string;
  className?: string;
  icon?: React.ElementType;
}

const Button = ({
  children,
  className = "",
  icon: Icon,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`px-5 text-white rounded-3xl hover:bg-gruen bg-blau font-text min-h-12 flex items-center ${className}`}
    >
      {Icon && <Icon height={24} width={24} className="mr-2" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;

{/*const ButtonOutline = ({
  children,
  className = "",
}: ButtonProps): JSX.Element => {
  return (
    <button className={"px-5 rounded-3xl bg-white border-blau"}>
      <span>{children}</span>
    </button>
  );
};
export default ButtonOutline;
*/}