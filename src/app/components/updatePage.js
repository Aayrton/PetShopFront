import React, {PropTypes} from 'react';
import PetForm from './petForm';
import {Row, Col} from 'react-materialize';

class UpdatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true
    };
  }

  render() {
    return (
      <section>
        <Row>
          <Col offset="m4" m={4}>
            <h2>Update</h2>
            <PetForm
              edit={this.state.edit}
              oldPet={this.props.pet}
              updatePetAction={this.props.updatePet}
              />
          </Col>
        </Row>
      </section>
    );
  }
}

UpdatePage.propTypes = {
  updatePet: PropTypes.func.isRequired,
  pet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    weight: PropTypes.number,
    price: PropTypes.number
  }).isRequired
};

export default UpdatePage;
