import React, { FunctionComponent } from "react";
import { Container, Segment, Progress } from "semantic-ui-react";
import Dial from "./Dial";

const Timeline: FunctionComponent<{ date: Date; percentage: number }> = ({
  percentage,
  date,
}: {
  percentage: number;
  date: Date;
}) => (
  <Container id="timeline">
    <Segment>
      <Progress percent={percentage} attached="top" />
      <Dial num={date.getDate()} />
      -
      <Dial num={date.getMonth() + 1} />
      -
      <Dial num={date.getFullYear()} />
      <Progress percent={percentage} attached="bottom" />
    </Segment>
  </Container>
);

export default Timeline;
