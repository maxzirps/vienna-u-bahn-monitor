import React, { FunctionComponent } from "react";
import { Container, Segment, Progress } from "semantic-ui-react";

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
      {date.toLocaleDateString()}
      <Progress percent={percentage} attached="bottom" />
    </Segment>
  </Container>
);

export default Timeline;
