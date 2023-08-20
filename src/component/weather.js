import React, { Component } from "react";
import '../App.css'
class Weather extends Component {
  render() {
    return (
      <div className="weather">
        {this.props.city && <p>city: {this.props.city}</p>}
        {this.props.country && <p>country: {this.props.country}</p>}
        {this.props.description && <p>description: {this.props.description}</p>}
        {this.props.temprature && <p>temprature: {this.props.temprature}</p>}
        {this.props.hudit && <p>humidity:{this.props.hudit}</p>}
      </div>
    );
  }
}
export default Weather;
