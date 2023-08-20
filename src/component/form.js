import React, { Component } from "react";
import "../App.css";
class Form extends Component {
  render() {
      return (
        <form onSubmit={this.props.getweather} id="stripe-login">
          <div className="field padding-bottom--24">
            <input type="text" name="country" placeholder="Country"></input>
            <input type="text" name="city" placeholder="City"></input>
          </div>
          <input type="submit" value="Get Weather"></input>
        </form>
      );
  }
}
export default Form;
