import React, { Component } from "react";
import Search from "./Search";
import Background from './images/mountain.jpg';


class FullPageSearch extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundImage:`url(${Background})`
          }}
        >
          <Search />
        </div>
      </div>
    );
  }
}
export default FullPageSearch;
