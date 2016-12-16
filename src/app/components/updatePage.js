import React, {PropTypes} from 'react';
import PetForm from './petForm';

class UpdatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true
    };
  }

  render() {
    return (
      <PetForm
        edit={this.state.edit}
        oldPet={this.props.pet}
        updatePetAction={this.props.updatePet}
        />
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
    price: PropTypes.number,
    createdAt: PropTypes.string
  }).isRequired
};

export default UpdatePage;
