import React from "react";
import { Radio, Form } from "semantic-ui-react";

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
      <Form>
        <Form.Field>
          <Radio
            label="Mon-Fri"
            name="radioGroup"
            value="weekday"
            checked={selected === "weekday"}
            onChange={(): void => this.setState({ selected: "weekday" })}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Sat"
            name="radioGroup"
            value="sat"
            checked={selected === "sat"}
            onChange={(): void => this.setState({ selected: "sat" })}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Sun"
            name="radioGroup"
            value="sun"
            checked={selected === "sun"}
            onChange={(): void => this.setState({ selected: "sun" })}
          />
        </Form.Field>
      </Form>
    );
  }
}
