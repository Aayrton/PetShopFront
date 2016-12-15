import React from 'react';
import PetListContainer from '../containers/petListContainer';
import AddPet from '../containers/addPet';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <AddPet/>
        <PetListContainer/>
      </div>
    );
  }
}

export default Homepage;

