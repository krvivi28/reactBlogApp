import React from "react";

export default class CompA extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor child");
  }
  componentDidMount(): void {
    console.log("component mounted child");
  }
  static getDerivedStateFromProps() {
    console.log("derived");
    return null;
  }
  render(): React.ReactNode {
    console.log("render called child");
    return (
      <>
        <h1>ComA</h1>
      </>
    );
  }
}
