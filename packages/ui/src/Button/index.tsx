import cx from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "soft";
  size?: "default" | "small" | "medium" | "large" | "xlarge";
}

const getButtonClasses = (variant: string, size: string, disabled: boolean) => {
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500",
    secondary:
      "bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
    soft: "bg-indigo-50 text-indigo-600 shadow-sm hover:bg-indigo-100",
  }[variant];

  const sizeClasses = {
    default: "rounded px-2 py-1 text-xs",
    small: "rounded px-2 py-1 text-sm",
    medium: "rounded-md px-2.5 py-1.5 text-sm",
    large: "rounded-md px-3 py-2 text-sm",
    xlarge: "rounded-md px-3.5 py-2.5 text-sm",
  }[size];

  return cx(
    "font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    variantClasses,
    sizeClasses,
    disabledClasses
  );
};

const Button = ({
  children,
  variant = "primary",
  size = "default",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx(getButtonClasses(variant, size, !!props.disabled))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
