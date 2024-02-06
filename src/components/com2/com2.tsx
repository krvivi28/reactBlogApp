// import css from "./com2.module.css";
// import "./com2.css";
import styled from "styled-components";
import React from "react";
import axios from "axios";
export default class Com2 extends React.Component {
  Hmy = styled.h1`
    color: purple;
    border: 1px solid red;
  `;

  fetchData = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicodfe.com/todos/1"
    );
    return res.data;
  };
  a = [{ id: "1" }];
  componentDidMount(): void {
    // this.fetchData().then((data) => {
    //   console.log(data);
    // });
    console.log("calling axios...");
    const res = axios.put("https://vjsonplaceholder.typicode.com/todos/");
    res.then((data) => {
      console.log(data);
    });
  }
  render(): React.ReactNode {
    return (
      <>
        <h1>vivek</h1>
        {/* <this.Hmy>{a}</this.Hmy> */}
      </>
    );
  }
}
