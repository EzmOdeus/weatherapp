import React, { Component } from "react";
import Form from "./component/form";
import Weather from "./component/weather";
import "./App.css";
const AKey = "fbb698ae847ce64254b836c1c7a933a2";
// https://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=fbb698ae847ce64254b836c1c7a933a2
class App extends Component {
  
  state = {
    temprature: "",
    city: "",
    country: "",
    hudit: "",
    description: "",
    error: "",
  };
  getweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${AKey}`
    );
    const data = await api.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        hudit: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temprature: "",
        city: "",
        country: "",
        hudit: "",
        description: "",
        error: "",
      });
    }
  };
  render() {
    return (
      <div className="App">

         
              <Form getweather={this.getweather} />
              <Weather
                city={this.state.city}
                country={this.state.country}
                temprature={this.state.temprature}
                description={this.state.description}
                hudit={this.state.hudit}
              />
            </div>
    
    );
  }
}
export default App;
