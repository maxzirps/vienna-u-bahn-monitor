import React, { FunctionComponent, useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import Timeline from "./components/Timeline";

/** TODO:
 * Ideas:
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
    }, 1000);
  });

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Timeline date={date} percentage={(counter / 360) * 100} />
      </header>
    </div>
  );
};

export default App;
