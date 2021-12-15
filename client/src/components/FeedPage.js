import React from "react";
import logo from "../images/sslogo2.png";

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 9999999999999,
      objs: [],
    };
  }

  async componentDidMount() {
    const url = "/posts/9999999999999";

    let res = await fetch(url)
      .then((response) => response.json())
      .then((obj) => {
        console.log("Obj " + JSON.stringify(obj)); //Must be stringify

        this.setState({
          objs: obj,
          // objs: JSON.stringify(obj),
          // objs: JSON.stringify(obj[0]),
        });
      });

    // console.log("1: " + ob[0]); //undef
    // console.log("2: " + JSON.stringify(ob[0])); //undef
    // console.log("3: " + ob); //blank
    // console.log("4: " + JSON.stringify(ob)); //[]

    // console.log("5: " + this.state.objs); //[obj obj], [obj obj], ...
    // console.log("6: " + JSON.stringify(this.state.objs)); //WORKs --> [{obj}]
    for (let index = 0; index < 4; index++) {
      console.log(
        "Index[" + index + "]: " + JSON.stringify(this.state.objs[index])
      );
    }
    // for (let index = 0; index < 4; index++) {
    //   console.log("NO STRING[" + index + "]: " + this.state.objs[index]);
    // }
    return;
  }

  render() {
    for (let index = 0; index < 4; index++) {
      console.log(
        "RENDER[" + index + "]: " + JSON.stringify(this.state.objs[index])
      );
    }

    return (
      <div
        id="feedModeTab"
        className="mode-page"
        role="tabpanel"
        aria-label="Feed Tab"
        tabIndex="0"
      >
        <h1 className="mode-page-header">Activity Feed</h1>
        <p className="mode-page-content">This page is under construction.</p>
        <img className="mode-page-icon" src={logo} alt="SpeedScore logo"></img>
      </div>
    );
  }
}

export default FeedPage;
