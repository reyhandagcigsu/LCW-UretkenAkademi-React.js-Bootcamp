import React, { Component } from "react";
import { ListGroup, ListGroupItem, Alert } from "reactstrap";
import { Card, CardTitle, CardText, Button } from "reactstrap";
import { Table } from "reactstrap";
import ReactTooltip from "react-tooltip";

class UsersInfo extends Component {
  constructor(props) {
    super(props);
  }

  getFormattedAddressData = (addressJson) => {
    let formattedString = "";
    Object.keys(addressJson).forEach(function (key) {
        if(typeof addressJson[key]!=='object')
            formattedString = formattedString + key + ":" + addressJson[key] + " ";
    });

    return formattedString;
  };

  render() {
    return (
      <div data-tip data-for="registerTip">
        {this.props.user.username} : {this.props.user.name}
        <ReactTooltip id="registerTip" place="top" effect="solid">
          {this.getFormattedAddressData(this.props.user.address)}
        </ReactTooltip>
      </div>
    );
  }
}

export default UsersInfo;
