import React from "react";

interface Props {
  name: string | number;
  age: number;
  children: React.ReactNode;
}

const SimpleComponent = (props: Props) => {
  const { name, age } = props;
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default SimpleComponent;
