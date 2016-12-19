import React from 'react';
import {Navbar, Col, Row} from 'react-materialize';
import {Link} from 'react-router';

const Header = () => (
  <Navbar brand="PetShop" className="teal lighten-2" left>
    <Row>
      <Col offset="m1 l2" m={10} l={8}>
        <ul>
          <li>
            <Link to="/">
              Homepage
            </Link>
          </li>
        </ul>
      </Col>
    </Row>
  </Navbar>
);

export default Header;
