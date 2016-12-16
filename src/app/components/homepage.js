import React from 'react';
import PetListContainer from '../containers/petListContainer';
import AddPet from '../containers/petFormContainer';
import {Row, Col} from 'react-materialize';

class Homepage extends React.Component {
  render() {
    return (
      <Row>
        <Col s={4}>
          <AddPet edit={false}/>
        </Col>
        <Col s={8}>
          <PetListContainer/>
        </Col>
      </Row>
    );
  }
}

export default Homepage;

