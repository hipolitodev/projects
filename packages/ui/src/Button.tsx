import cx from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "default" | "primary" | "link";
  size?: "default" | "large" | "small";
  isDisabled?: boolean;
}

const getButtonClasses = (
  variant: string,
  size: string,
  isDisabled: boolean
) => {
  const commonClasses = "border rounded";
  const disabledClasses = isDisabled ? "text-disabled border-neutral-60" : "";

  const variantClasses = {
    default: `${commonClasses} text-primary border-neutral-60`,
    primary: `${commonClasses} text-white border-primary bg-primary`,
    link: `text-interactive`,
  }[variant];

  const sizeClasses = {
    default: "px-4 py-2 text-base",
    large: "px-4 py-2 text-lg",
    small: "px-3 py-1.5 text-sm",
  }[size];

  return cx(variantClasses, sizeClasses, disabledClasses);
};

const Button = ({
  label,
  variant = "default",
  size = "default",
  isDisabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={isDisabled}
      className={cx(
        getButtonClasses(variant, size, isDisabled),
        props.className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
