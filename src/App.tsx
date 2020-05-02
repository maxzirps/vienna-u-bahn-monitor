import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import Header from "./components/Header";
import "./App.css";
import DateTime from "./components/DateTime";
import SpeedSelector from "./components/SpeedSelector";
import DaySelector from "./components/DaySelector";

export default class App extends Component<{}, { date: Date; speed: number }> {
  timerID: number;

  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date(),
      speed: 1,
    };
    this.timerID = 0;
  }

  componentDidMount(): void {
    this.setTimer();
  }

  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  setTimer = (): void => {
    clearInterval(this.timerID);
    const { speed } = this.state;
    this.timerID = setInterval(() => this.increaseHour(), 1000 / speed);
  };

  increaseHour = (): void => {
    const { date } = this.state;
    const newDate = new Date(date);
    newDate.setMinutes(newDate.getMinutes() + 1);
    this.setState({ date: newDate });
  };

  render(): any {
    const { date, speed } = this.state;
    return (
      <>
        <Container>
          <header>
            <Header />
            <Grid columns="equal" container divided>
              <Grid.Column textAlign="center">
                <DateTime date={date} />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <DaySelector />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <SpeedSelector
                  speed={speed}
                  changeSpeed={(newSpeed: number): void => {
                    this.setState({ speed: newSpeed }, () => this.setTimer());
                  }}
                />
              </Grid.Column>
            </Grid>
          </header>
        </Container>
      </>
    );
  }
}
