import React from "react";

const Card = () => {
  const count = 16;
  const block = [];
  for (let i = 1; i <= count; i++) {
    block.push(<div className={"block block" + i}></div>);
  }

  return (
    <div className="wrapper">
      <div className="card rounded-lg">{block}</div>
    </div>
  );
};

export default Card;
