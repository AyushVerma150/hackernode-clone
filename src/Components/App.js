import React, { Component } from "react";
import LinkList from "./LinkList";
import AddPost from "./AddPost";

class App extends Component {
  render() {
    return (
      <div>
        {/* <LinkList /> */}
        <AddPost />
      </div>
    );
  }
}

export default App;
