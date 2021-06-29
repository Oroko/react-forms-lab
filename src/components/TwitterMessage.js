import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
     
    };
  }
  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
 

  render() {
    let charNumber = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={(event) => this.handleChange(event)}
          value={this.state.message}
          type="text"
          name="message"
          id="message"
        />
        <p>{charNumber}</p>
      </div>
    );
  }
}

export default TwitterMessage;
