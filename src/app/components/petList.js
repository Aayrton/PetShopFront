import React, {PropTypes} from 'react';
import Pet from './pet';
import {Table} from 'react-materialize';

const PetList = ({pets, deletePet}) => (
  <Table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Size</th>
        <th>Weight</th>
        <th>Price</th>
        <th>CreatedAt</th>
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
          createdAt={pet.createdAt}
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
    price: PropTypes.number,
    createdAt: PropTypes.string
  })).isRequired,
  deletePet: PropTypes.func.isRequired
};

export default PetList;
