import React from "react";
import ErrorBoundary from "./components/ErrorBoundary/Error";
import Com2 from "./components/com2/com2";
import UseState from "./components/hooks/useState/UseState";
import Home from "./components/BlogApp/Home/Home";

export default class Timer extends React.Component<any, any> {
  timer: any;
  a = 2;
  handlePlus = () => {
    this.a += 1;
    this.render();
    // console.log("handle plus called");
    // clearInterval(this.timer);
    // this.setState(
    //   (prev) => {
    //     return { ...prev, start: !prev.start };
    //   },
    //   () => {
    //     if (this.state.start) {
    //       this.startTimer();
    //     } else {
    //       clearInterval(this.timer);
    //     }
    //   }
    // );
  };
  getUpdatedA = () => {
    return this.a;
  };
  startTimer = () => {
    this.timer = setInterval(() => {
      // this.setState((prevState) => ({ count: prevState.count - 1 }));
      this.setState({ count: this.state.count - 1 }, () => {
        console.log("timer ghat gya----->>>1");
      });
    }, 1000);
  };
  constructor(props: any) {
    super(props);
    this.state = {
      count: 30,
      start: true,
    };
  }
  // const []=({})
  shouldComponentUpdate(
    nextProps: Readonly<any>,
    nextState: Readonly<any>,
    nextContext: any
  ): boolean {
    console.log("should comp updated called timer---------->>>2");
    console.log("this.state", this.state);
    console.log(`nextProps:`, nextProps, "nextState:", nextState);

    if (nextState.count % 5 === 0) return true;
    else return false;
  }
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
    // this.startTimer();
  }
  render(): React.ReactNode {
    console.log("render called -------->>3");
    return (
      <>
        {<Home />}
        {/* <UseState /> */}
        {/* <Com2 /> */}
        {/* <ErrorBoundary>
          <Com2 />
        </ErrorBoundary>
        <h1>Count:{this.state.count}</h1>
        <h1>A is:{this.getUpdatedA()}</h1>
        <button
          onClick={() => {
            this.handlePlus();
          }}
        >
          {this.state.start ? "stop" : "start"}
        </button> */}
      </>
    );
  }
}
