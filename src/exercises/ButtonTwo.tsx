
export const Button = (props: {
  children: React.ReactNode
}) => {
  return <button>{props.children}</button>;
};

export const Parent = () => {
  return (
    <>
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
