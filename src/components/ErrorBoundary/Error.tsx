import React from "react";

export default class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    console.log("error is getDerivedState", error);
    console.log(error);
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("error is", error);
    console.log("info is", errorInfo);
  }
  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <>
          <h1>Error:</h1>
        </>
      );
    } else return <>{this.props.children}</>;
  }
}
