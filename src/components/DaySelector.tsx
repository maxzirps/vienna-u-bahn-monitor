import React from "react";
import { Radio } from "semantic-ui-react";

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
      <>
        <Radio
          label="Mon-Fri"
          name="radioGroup"
          value="this"
          checked={selected === "this"}
          onChange={() => this.setState({ selected: "this" })}
        />
        <Radio
          label="Sat"
          name="radioGroup"
          value="that"
          checked={selected === "that"}
          onChange={() => this.setState({ selected: "that" })}
        />
        <Radio
          label="Sun"
          name="radioGroup"
          value="that"
          checked={selected === "that"}
          onChange={() => this.setState({ selected: "that" })}
        />
      </>
    );
  }
}
