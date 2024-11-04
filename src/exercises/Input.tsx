import { ComponentProps } from "react";

// Omit Utility Type
export type InputProps = Omit<ComponentProps<"input">, "onChange"> & { onChange: (value: string) => void }

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

export const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);
      }}
    ></Input>
  );
};
