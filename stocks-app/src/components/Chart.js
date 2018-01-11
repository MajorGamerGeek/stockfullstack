import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Chart extends Component {
  static propTypes = {
    stocks: PropTypes.object
  }

  render() {
    const { stocks } = this.props;

    return (
      <div>
        { stocks } 
      </div>
    )
  }
}

export default (Chart);