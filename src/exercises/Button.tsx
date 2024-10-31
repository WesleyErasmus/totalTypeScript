
export interface ButtonProps {
    className: string
}

export const Button = (props: ButtonProps) => {
  return <button className={props.className}></button>;
  // error under `props.className`
};

export const Parent = () => {
  return (
    <>
      <Button className={""}></Button>
      // currently no error
      <Button className="my-class"></Button>
      // error under `className`
    </>
  );
};
