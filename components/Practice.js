//this is all code for the "notes" functions entering text, etc. It saves it as well. But i'm not 100% sure on how to save  the actual input on the device for the next boot.


/**import React from "react";
import { render } from "react-dom";

// Just style stuff - not important
const styles = {
  border: "1px solid black",
  padding: "10px"
};

// The events object to start with
// This is what your "database" would look like
// when passing in data for the first time
const events = [
  {
    date: "10/12/2029",
    note: "I need to buy groceries"
  },
  {
    date: "10/13/2029",
    note: "I need to buy household supplies"
  }
];

class App extends React.Component {
  constructor(props) {
    // Must write super(props) in constructor!!!!!!!!!!!!!!
    super(props);

    this.state = {
      showingInputs: false,
      events: props.events,
      date: props.date,
      value: null
    };
  }

  updateInputValue(event) {
    this.setState({
      value: event.target.value
    });
  }

  addEvent(event) {
    // Slice is needed to "clone" the array.
    // You cannot "mutate" the state object,
    // because it is on changable via set state.
    const events = this.state.events.slice(0);

    // Adds the object to the events hash
    events.push(event);

    this.setState({
      events: events
    });
  }

  saveValue() {
    this.addEvent({ date: "10/12/2029", note: this.state.value });

    this.toggleInputs(false);
  }

  renderInputs() {
    // Doesn't show inputs if this state is false
    if (!this.state.showingInputs) {
      return null;
    }

    return (
      <div>
        <input
          value={this.state.value}
          onChange={this.updateInputValue.bind(this)}
        />
        <button onClick={this.saveValue.bind(this)}>Save this data</button>
      </div>
    );
  }

  toggleInputs(isToggled) {
    this.setState({
      showingInputs: isToggled,
      value: null
    });
  }

  getTodaysEvents() {
    return this.state.events.filter(event => {
      return event.date === this.props.date;
    });
  }

  renderEvents() {
    return this.getTodaysEvents().map(event => (
      <div style={styles}>{event.note}</div>
    ));
  }

  render() {
    return (
      <div style={styles}>
        <div onClick={this.toggleInputs.bind(this, true)}>
          {this.props.date}
        </div>
        {this.renderInputs()}
        {this.renderEvents()}
      </div>
    );
  }
}
//date adds to array, if it matches
render(
  <App events={events} date="10/12/2029" />,
  document.getElementById("root")
); */
