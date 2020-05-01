import React, { FunctionComponent, useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import Header from "./components/Header";
import "./App.css";
import Timeline from "./components/Timeline";
import DayCycle from "./components/DayCycle";

/** TODO:
 * Ideas:
 * - change sun to just switch between moon and sun; no flying around;
 * - include weather data
 * - time machine icon on start; on click flies into page to start
 * - date better animation; like rotate vertical
 */

const App: FunctionComponent = () => {
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);
  const [date, setDate] = useState<Date>(startDate);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);
      setDate(newDate);
      setCounter(counter + 1);
    }, 5000);
  });

  return (
    <>
      {/* <DayCycle /> */}
      <Container>
        <header>
          <Header />
          <Timeline date={date} percentage={(counter / 360) * 100} />
        </header>
      </Container>
    </>
  );
};

export default App;
