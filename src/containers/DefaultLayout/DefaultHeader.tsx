import { Component, Fragment } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {  AppSidebarToggler } from '@coreui/react';

class DefaultHeader extends Component {

  render() {
    return (
      <Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Dashboard</NavLink>
          </NavItem>
        </Nav>
      </Fragment>
    );
  }
}


export default DefaultHeader;
