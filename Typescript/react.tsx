import React from "react";
import { Button } from "@mui/material";

export interface IMyButtonProps {
  buttonName: string;
  handleButtonClick(): void;
}

export class MyButton extends React.Component<IMyButtonProps> {
  constructor(props: IMyButtonProps) {
    super(props);
    this.onButtonClicked = this.onButtonClicked.bind(this);
  }
  render() {
    return (
      <div>
        <Button color="primary" onClick={this.onButtonClicked}>
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
  onButtonClicked() {
    console.log(`MyButton.onButtonClicked() called`);
    this.props.handleButtonClick();
  }
}
