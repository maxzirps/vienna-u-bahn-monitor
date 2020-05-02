import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import DateTime from "./components/DateTime";
import SpeedSelector from "./components/SpeedSelector";
import DaySelector from "./components/DaySelector";
import Map from "./components/Map";

/** TODO: credit for svg https://commons.wikimedia.org/wiki/File:U-Bahn_Wien,_Netzplan.svg
 *
 */
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
        <header>
          <Header />
          <div id="controlbar">
            <div>
              <DateTime date={date} />
            </div>
            <div>
              <DaySelector />
            </div>
            <div>
              <SpeedSelector
                speed={speed}
                changeSpeed={(newSpeed: number): void => {
                  this.setState({ speed: newSpeed }, () => this.setTimer());
                }}
              />
            </div>
          </div>
        </header>
        <main>
          <Map />
        </main>
      </>
    );
  }
}
