import cx from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "default" | "primary" | "link";
  size?: "default" | "large" | "small";
}

const getButtonClasses = (variant: string, size: string, disabled: boolean) => {
  const commonClasses = "border rounded";
  const disabledClasses = disabled ? "text-disabled border-neutral-60" : "";

  const variantClasses = {
    default: `${commonClasses} text-primary border-neutral-60`,
    primary: `${commonClasses} text-white border-interactive bg-interactive`,
    link: `text-interactive`,
  }[variant];

  const sizeClasses = {
    default: "px-4 py-2 text-base",
    large: "px-4 py-2 text-lg",
    small: "px-3 py-1.5 text-sm",
  }[size];

  return cx("font-bold", variantClasses, sizeClasses, disabledClasses);
};

const Button = ({
  children,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cx(
        getButtonClasses(variant, size, !!props.disabled),
        props.className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
