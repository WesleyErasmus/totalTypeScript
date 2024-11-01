import { ComponentProps } from "react";

// Component Props
export const Button = ({ className, ...rest }: ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

export const Parent = () => {
  return <Button> </Button>
}