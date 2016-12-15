import React, {PropTypes} from 'react';
import Pet from './pet';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

const PetList = ({pets, deletePet}) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
        <TableHeaderColumn>Actions</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {pets.map(pet =>
        <Pet
          key={pet.id}
          id={pet.id}
          name={pet.name}
          description={pet.description}
          deletePet={deletePet}
          />
      )}
    </TableBody>
  </Table>
);

PetList.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  })).isRequired,
  deletePet: PropTypes.func.isRequired
};

export default PetList;
