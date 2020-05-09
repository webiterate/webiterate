import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { NavBarWrapper } from './navBar-styles';
import messages from './messages';
import { primary } from '../../styles/helpers/variables';
import { logoOnlyText } from '../../containers/App/constants';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavBarWrapper>
      <Navbar color={`${primary}`} expand="md">
        <NavbarBrand href="/">
          <img src={logoOnlyText} alt="Webiterate" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/home">
                <FormattedMessage {...messages.home} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/home">
                <FormattedMessage {...messages.journey} />
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FormattedMessage {...messages.experiments} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </NavBarWrapper>
  );
}

export default Header;
