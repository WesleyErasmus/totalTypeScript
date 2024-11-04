// Imagine NavBar is an external library!

export const NavBar = (props: {
  title: string;
  links: string[];
  children: React.ReactNode;
}) => {
  return <div>Some content</div>;
};


import { ComponentProps } from "react";
// Using reusable type helper from React. Passing existing NavBar component to React's ComponentProps which will then extract all the props from NavBar.
type NavBarProps = ComponentProps<typeof NavBar>;

export const Parent = () => {
  return <NavBar title={""} links={[]}>children...</NavBar>;
};
