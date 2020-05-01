import React, { FunctionComponent } from "react";

const Dial: FunctionComponent<{ num: number }> = ({ num }: { num: number }) => (
  <span className="dial">{num}</span>
);

export default Dial;
