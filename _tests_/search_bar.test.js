import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../src/components/search_bar';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

describe('Component: App', () => {


  it('should match its empty index snapshot', () => {
    const tree = renderer.create(<SearchBar />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
