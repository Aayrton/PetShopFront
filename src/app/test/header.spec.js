import React from 'react';
import {shallow} from 'enzyme';
import Header from '../components/header';
import {expect} from 'chai';


function setup() {

  const enzymeWrapper = shallow(<Header/>)

  return {
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Header', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('Navbar').hasClass('teal lighten-2')).to.be.true;

      expect(enzymeWrapper.find('Row'));

      const colProps = enzymeWrapper.find('Col').props();
      expect(colProps.offset).to.eql('m1 l2');
      expect(colProps.m).to.eql(10);
      expect(colProps.l).to.eql(8);

      expect(enzymeWrapper.find('ul'));
      expect(enzymeWrapper.find('li'));
      const linkProps = enzymeWrapper.find('Link').props();
      expect(linkProps.to).to.eql('/');
    });
  });
});
