import React, {PropTypes} from 'react';
import Pet from './pet';
import {Table} from 'react-materialize';

const PetList = ({pets, deletePet}) => (
  <Table className="responsive-table highlight striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Size</th>
        <th>Weight</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {pets.map(pet =>
        <Pet
          key={pet.id}
          id={pet.id}
          name={pet.name}
          size={pet.size}
          weight={pet.weight}
          price={pet.price}
          deletePet={deletePet}
          />
      )}
    </tbody>
  </Table>
);

PetList.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    weight: PropTypes.number,
    price: PropTypes.number
  })).isRequired,
  deletePet: PropTypes.func.isRequired
};

export default PetList;
