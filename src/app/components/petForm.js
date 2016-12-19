import React, {PropTypes} from 'react';
import {Input, Row, Col} from 'react-materialize';

class PetForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      size: '',
      weight: '',
      price: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  componentDidMount() {
    if (this.props.edit) {
      this.setState(this.props.oldPet);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.edit) {
      this.props.updatePetAction(this.state);
    } else {
      this.props.addPetAction(this.state);

      this.setState({
        name: '',
        size: '',
        weight: '',
        price: ''
      });
    }
  }

  handleNameChange(e) {
    this.setState({name: e.target.value.trim()});
  }

  handleSizeChange(e) {
    this.setState({size: e.target.value.trim()});
  }

  handleWeightChange(e) {
    this.setState({weight: e.target.value.trim()});
  }

  handlePriceChange(e) {
    this.setState({price: e.target.value.trim()});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col s={12}>
              <Input
                type="text"
                label="* Name"
                placeholder="Example: Dog"
                value={this.state.name}
                onChange={this.handleNameChange}
                maxLength={16}
                required
                />
            </Col>
            <br/>
            <Col s={12}>
              <Input
                type="number"
                label="Size (m)"
                placeholder="Example: 1.2"
                value={this.state.size}
                onChange={this.handleSizeChange}
                maxLength={16}
                />
            </Col>
            <br/>
            <Col s={12}>
              <Input
                type="number"
                label="Weight (kg)"
                placeholder="Example: 20"
                value={this.state.weight}
                onChange={this.handleWeightChange}
                maxLength={16}
                />
            </Col>
            <br/>
            <Col s={12}>
              <Input
                type="number"
                label="* Price (€)"
                placeholder="Example: 600"
                required
                value={this.state.price}
                onChange={this.handlePriceChange}
                maxLength={16}
                />
            </Col>
            <br/>
          </Row>
          <br/>
          <Row>
            <Col s={6} offset="s2">
              <button className="btn waves-effect waves-light full-width" type="submit">Submit</button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

PetForm.propTypes = {
  addPetAction: PropTypes.func,
  updatePetAction: PropTypes.func,
  edit: PropTypes.bool.isRequired,
  oldPet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    weight: PropTypes.number,
    price: PropTypes.number
  })
};

export default PetForm;

