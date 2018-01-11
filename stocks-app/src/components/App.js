import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import { fetchAllStocks } from '../actions/Stocks';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchAllStocks();
  };

  render() {
    const { stocks } = this.props;

    console.log(stocks);

    return (
      <div className="App">
        <div className="App-header">
          <Nav bsStyle="tabs">
            <NavItem href="/">Home</NavItem>
          </Nav>
        </div>
      </div>
    );
  }
};

function mapStateToProps({ stocks }) {
  return {
    stocks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllStocks: () => dispatch(fetchAllStocks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);