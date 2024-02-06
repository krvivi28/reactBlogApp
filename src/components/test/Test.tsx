import React from "react";
// import css from "./test.module.css";
import "./test.css";
import styled from "styled-components";

interface Ipros {
  data: { id: any; title: any; body: any };
  changeBodyOfData(ind: any, updatedData: any): any;
}
interface Istate {
  count: number;
}
export default class Test extends React.Component<Ipros, Istate> {
  static defaultProps: {};
  constructor(props: Ipros) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  styles = {
    header: {
      color: "green",
      backgroundColor: "black",
    },
  };
  handleChange = (ind: any, e: any) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.props.changeBodyOfData(ind, e.target.value);
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };
  B = styled.div`
    padding: 5px;
    color: ${(props: any) => {
      return props.color;
    }};
    background-color: grey;
    display: ${(props: any) => {
      return props.show === "true" ? "none" : "block";
    }};
    &:hover {
      // color: blue;
      background-color: pink;
    }
  `;
  render() {
    console.log(this.props);
    const { id, title, body } = this.props.data;
    return (
      <>
        <h1 className="hnew">vivi</h1>
        <div className="card">
          <div style={this.styles.header} className="header">
            <h4>{title}</h4>
          </div>
          <this.B color="purple" show={"false"}>
            <p>{body}</p>
            <input
              onChange={() => this.handleChange(id, event)}
              type="text"
              name="body"
              id=""
              placeholder="update card body"
            />
            <button>update</button>
          </this.B>
        </div>
      </>
    );
  }
}
