import React from "react";
import logo from "../images/sslogo2.png";

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 9999999999999,
    };
  }

  getObject = async (url) => {
    let res = await fetch(url)
      .then((response) => response.json())
      .then((obj) => {
        console.log("Obj " + JSON.stringify(obj)); //Must be stringify
        console.log("Obj Id: " + obj._id);
        return obj._id;
      });
  };

  componentDidMount() {
    // let id = 9999999999999;
    let idarray = [];
    idarray.push(9999999999999);

    for (let i = 0; i < 5; i++) {
      // let url = "/posts/" + id;
      // let url = "/posts/" + idarray[i];
      let url = "/posts/" + this.state.id;

      // console.log("C: ID is : " + id);
      // console.log("C: ID is : " + idarray[i]);
      console.log("C: ID is " + this.state.id);

      let newid = this.getObject(url);
      console.log("newid: " + newid);
      // idarray.push(newid);
      this.setState({
        ...this.state,
        ...newid,
      });

      // let res = fetch(url)
      //   .then((response) => response.json())
      //   .then((obj) => {
      //     console.log("Obj " + JSON.stringify(obj)); //Must be stringify
      //     console.log("Obj Id: " + obj._id);

      //     this.setState({
      //       ...this.state,
      //       ...obj._id,
      //     });

      //     /*****************************************************************
      //      * Attempts at updating ID
      //      *****************************************************************         */
      //     // idarray.push(JSON.stringify(obj._id));
      //     // idarray.push(Number(JSON.stringify(obj._id)));
      //     // idarray.push(Number(obj._id));
      //     // idarray.push(obj._id);

      //     // idarray.push(obj._id);
      //     // id = JSON.stringify(obj._id);
      //     // idarray.push(JSON.stringify(obj._id));
      //   });

      // console.log("res: " + res);
      // console.log("res stringify: " + JSON.stringify(res));
    }

    // for (let z = 0; z < 5; z++) {
    //   console.log("z: " + idarray[z]);
    // }
  }

  render() {
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
