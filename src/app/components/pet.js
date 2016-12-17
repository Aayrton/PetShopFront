import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Button} from 'react-materialize';

class Pet extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick() {
    console.log('click');
    this.props.deletePet(this.props.id);
  }

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.size}m</td>
        <td>{this.props.weight}kg</td>
        <td>{this.props.price} €</td>
        <td>

          <Link to={`/pet/${this.props.id}`} className="btn-floating waves-effect waves-light">
            <i className="material-icons">edit</i>
          </Link>
          <Button
            floating
            className="red"
            waves="light"
            icon="delete"
            onClick={this.handleDeleteClick}
            />
        </td>
      </tr>
    );
  }
}

Pet.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  weight: PropTypes.number,
  price: PropTypes.number,
  createdAt: PropTypes.string,
  deletePet: PropTypes.func.isRequired
};

export default Pet;
