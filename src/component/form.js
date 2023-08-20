import React, { Component } from "react";
import "../App.css";
class Form extends Component {
  render() {
      return (
        <form onSubmit={this.props.getweather}>
          <div className="login-wrap">
            <div class="login-html">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                class="sign-in"
                checked
              />
              <label for="tab-1" class="tab">
                Wether-App
              </label>
              <input id="tab-2" type="radio"  class="sign-up"  />
              <label for="tab-2" class="tab"></label>
              <div class="login-form">
                <div class="sign-in-htm">
                  <div class="group">
                    <label for="user" class="label">
                      Country
                    </label>
                    <input id="user" type="text" class="input"name="country" />
                  </div>
                  <div class="group">
                    <label for="pass" class="label">
                      City
                    </label>
                    <input
                      name="city"
                  
                      type="text"
                      className="input"
                
                    />
                  </div>

                  <div className="group">
                    <input type="submit" className="button" value="Get Weather" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      );
  }
}
export default Form;
