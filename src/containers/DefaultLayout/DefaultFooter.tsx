import { Component, Fragment } from 'react';

class DefaultFooter extends Component {
  render() {
    return (
      <Fragment>
        <span>
          &copy; Copyright by {new Date().getFullYear()} <a href="/"> Dashboard</a>
        </span>
        <span className="ml-auto"></span>
      </Fragment>
    );
  }
}

export default DefaultFooter;
