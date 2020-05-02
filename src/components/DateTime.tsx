import React, { FunctionComponent } from "react";
import { Segment } from "semantic-ui-react";
import Dial from "./Dial";

const DateTime: FunctionComponent<{ date: Date }> = ({
  date,
}: {
  date: Date;
}) => (
  <>
    <Segment>
      <Dial num={date.getHours()} />
      :
      <Dial num={date.getMinutes()} />
      <Dial num={date.getDate()} />
      -
      <Dial num={date.getMonth() + 1} />
      -
      <Dial num={date.getFullYear()} />
    </Segment>
  </>
);

export default DateTime;
