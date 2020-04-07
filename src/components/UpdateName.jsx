import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName } from '../redux/actions';

class UpdateName extends Component {
  state = {
    input: '',
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setName(this.state.input);
    this.setState({
      input: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Cat's Name"
          value={this.state.input}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default connect(null, { setName })(UpdateName);
