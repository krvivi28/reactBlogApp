import React from "react";

export default class Timer extends React.Component<any, any> {
  timer: any;
  handlePlus = () => {
    console.log("handle plus called");
    clearInterval(this.timer);
    // this.setState((prev) => {
    //   return { ...prev, start: !prev.start };
    // });
    // if (this.state.start) {
    //   this.startTimer();
    // } else {
    //   clearInterval(this.timer);
    // }
  };
  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState((prev: any) => {
        console.log("prev state is", prev);
        return { count: prev.count - 1 };
      });
      // this.setState({ count: this.state.count - 1 });
    }, 1000);

    // setTimeout(() => {
    //   clearInterval(this.timer);
    // }, 3000);
  };
  constructor(props: any) {
    super(props);
    this.state = {
      count: 30,
      start: true,
    };
  }
  // const []=({})
  // shouldComponentUpdate(
  //   nextProps: Readonly<any>,
  //   nextState: Readonly<any>,
  //   nextContext: any
  // ): boolean {
  //   console.log("should comp updated called timer");
  //   return true;
  // }
  // getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<any>) {
  //   console.log("timer snapshot before update");
  //   return null;
  // }
  // componentDidUpdate(
  //   prevProps: Readonly<any>,
  //   prevState: Readonly<any>,
  //   snapshot?: any
  // ): void {
  //   // clearInterval(this.timer);
  //   if (this.state.count === 0) {
  //     clearInterval(this.timer);
  //   }
  //   console.log("timer did updated called");
  //   console.log("-------------->>>>>>>>>");
  // }
  getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<any>) {
    console.log("snapshot called child");
    console.log(prevProps);
    console.log(prevState);
    console.log("---------->>>>> snapshot end");
    return null;
  }
  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<any>,
    snapshot?: any
  ): void {
    console.log("update called child");
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot);
    console.log("---------->>>>> update end");
  }
  componentDidMount(): void {
    this.startTimer();
    // const ref = setInterval(() => {
    //   // this.setState((prevState) => ({ count: prevState.count - 1 }));
    //   this.setState({ count: this.state.count - 1 });
    // }, 1000);

    // setTimeout(() => {
    //   clearInterval(ref);
    // }, 3000);
  }
  render(): React.ReactNode {
    return (
      <>
        <h1>Count:{this.state.count}</h1>
        <button
          onClick={() => {
            this.handlePlus();
          }}
        >
          {this.state.start ? "stop" : "start"}
        </button>
      </>
    );
  }
}
