import React from "react";

export default class DaySelector extends React.Component<
  {},
  { selected: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: "",
    };
  }

  render(): any {
    const { selected } = this.state;
    return (
      <form>
        <label htmlFor="weekday">
          <input
            id="weekday"
            type="radio"
            value="weekday"
            checked={selected === "weekday"}
            onChange={(): void => this.setState({ selected: "weekday" })}
          />
          Weekday
        </label>
        <label htmlFor="weekend">
          <input
            id="weekend"
            type="radio"
            value="weekend"
            checked={selected === "weekend"}
            onChange={(): void => this.setState({ selected: "weekend" })}
          />
          Weekend
        </label>
      </form>
    );
  }
}
