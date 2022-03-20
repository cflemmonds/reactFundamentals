import React from "react";
/*
     * State is data that a component stores and keeps track of throughout the life-cycle of the component
        * This is data that the user will see (called representational data)
    
    * State data is local to the component it's created/stored in.
        * By default, state data is only available in the component in which its defined, but props allow us to break this rule sometimes.
    * State data is usually representational, but it does not have to be.
    * Any change to the state of a component will trigger a re-render of that component.
*/

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //this is where we can declare state variables and assign them values
      descriptionOne:
        "State data is local to the component it's created in/stored in.",
      descriptionTwo:
        "State data is usually representational (data that the user will see) - but doesn't have to be.",
      descriptionThree:
        "Along with new props being passed to a component, any change to the state of a component will trigger a re-render of that component.",
      boxOne: false,
      boxTwo: false,
      boxThree: false,
    };
  }

  // methods/life-cycle methods will be declared here
  handleChange = (e) => {
      e.target.className === 'boxOne' ? (
          this.setState({
              boxOne: e.target.checked
          })
      ) : e.target.className === 'boxTwo' ? (
          this.setState({
              boxTwo: e.target.checked
          })
      ) : e.target.className =='boxThree' ? (
          this.setState({
              boxThree: e.target.checked
          })
      ) : console.log('Something went wrong')
  }

  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <h1>State</h1>
          <p>
            State is an instance of a React Class Component that can be defined
            as an object. This object holds a set of observable properties that
            control the behavior of the component.
          </p>
          <dl>

            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="checkbox"
                  className="boxOne"
                  style={{ marginRight: "5px" }}
                  onChange={(e)=> this.handleChange(e)}
                  />
                <dt>State data is local</dt>
                </div>
                {
                    this.state.boxOne ? (
                        <dd className="descriptionOne">{this.state.descriptionOne}</dd>
                    ) : (
                        <div></div>
                    )
                }


              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="checkbox"
                  className="boxTwo"
                  style={{ marginRight: "5px" }}
                  onChange={(e)=> this.handleChange(e)}
                  />
                <dt>Representational</dt>
              </div>
                  {
                      this.state.boxTwo ? (
                          <dd className="descriptionTwo">{this.state.descriptionTwo}</dd>
                      ) : (
                          <div></div>
                      )
                  }
                          
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="checkbox"
                  className="boxTwo"
                  style={{ marginRight: "5px" }}
                  onChange={(e)=> this.handleChange(e)}
                  />
                <dt>State/props change triggers a re-render</dt>
              </div>
                  {
                      this.state.boxThree ? (
                          <dd className="descriptionThree">{this.state.descriptionThree}</dd>
                      ) : (
                          <div></div>
                      )
                  }
            </div>
          </dl>
        </div>
      </div>
    );
  }
}

/* 

    ? What is happening
    ? In this component, when a user clicks on th checkbox, we want to change the state of the associated state variable from a boolean of false (the default state) to true.
    ? When the state variable is changed it will re-render the component. It should display the appropriate definition.
        ? BoxOne, Two , and Three will control whether or not our state variables of the descriptionOne, etc will be displayed for the user to see.

        * the handleChange() method will allow us to implement this. We'll handle this in the next lesson.

        * Now that the handleChange() method has been built, it's time to call it. This is done by adding the onChange attribute to each <input/> tag



*/

export default State;
