import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import DateTime from "./components/DateTime";
import SpeedSelector from "./components/SpeedSelector";
import DaySelector from "./components/DaySelector";
import Map from "./components/Map";

export default class App extends Component<
  {},
  { date: Date; speed: number; activeStations: string[] }
> {
  timerID: number;

  uSixStations: string[] = [
    "siebenhirten",
    "perfektastrasse",
    "erlaaerstrasse",
    "alterlaa",
    "amschoepfwerk",
    "tschertegasse",
    "bahnhofmeidling",
    "laengenfeldgasse",
    "gumpendorferstrasse",
    "westbahnhof",
    "burggasse-stadthalle",
    "thaliastrasse",
    "josefstaedterstrasse",
    "alserstrasse",
    "michelbeuern-akh",
    "waehringerstrasse-volksoper",
    "nussdorferstrasse",
    "spittelau",
    "jaegerstrasse",
    "dresdnerstrasse",
    "handelskai",
    "neuedonau",
    "floridsdorf",
  ];

  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date(),
      speed: 1,
      activeStations: [],
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

    const { activeStations } = this.state;
    const newActiveStations = [];
    const currStation = activeStations.pop();
    const currStationIndex = this.uSixStations.findIndex(
      (stationName: string) => stationName === currStation
    );
    if (currStationIndex === -1) {
      newActiveStations.push(this.uSixStations[0]);
    } else {
      newActiveStations.push(this.uSixStations[currStationIndex + 1]);
    }
    this.setState({ activeStations: newActiveStations });
  };

  render(): any {
    const { date, speed, activeStations } = this.state;
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
          <Map activeStations={activeStations} />
        </main>
      </>
    );
  }
}
