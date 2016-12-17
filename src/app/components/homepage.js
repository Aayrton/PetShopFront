import React from 'react';
import PetListContainer from '../containers/petListContainer';
import AddPet from '../containers/petFormContainer';
import {Row, Col} from 'react-materialize';

class Homepage extends React.Component {
  render() {
    return (
      <section>
        <h2>Homepage</h2>
        <Row>
          <Col m={4} s={12} className="petshop-card">
            <AddPet edit={false}/>
          </Col>
          <Col m={8} s={12}>
            <PetListContainer/>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Homepage;

