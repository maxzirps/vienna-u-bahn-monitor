import React, { FunctionComponent } from "react";
import Dial from "./Dial";

const DateTime: FunctionComponent<{ date: Date }> = ({
  date,
}: {
  date: Date;
}) => (
  <>
    <div>
      <Dial num={date.getHours()} />
      :
      <Dial num={date.getMinutes()} />
    </div>
    <div>
      <Dial num={date.getDate()} />
      -
      <Dial num={date.getMonth() + 1} />
      -
      <Dial num={date.getFullYear()} />
    </div>
  </>
);

export default DateTime;
