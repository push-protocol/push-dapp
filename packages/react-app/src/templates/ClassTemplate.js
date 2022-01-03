import React from "react";

// Class Component
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: localStorage.getItem('myValueInLocalStorage') || '',
    };
  }

  componentDidUpdate() {
    localStorage.setItem('myValueInLocalStorage', this.state.value);
  }

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Hello React ES6 Class Component!</h1>

        <input
          value={this.state.value}
          type="text"
          onChange={this.onChange}
        />

        <Text>{this.state.value}</Text>
      </div>
    );
  }
}

// CSS STYLES
const Text = styled.div`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
  font-size: 15px;
`
