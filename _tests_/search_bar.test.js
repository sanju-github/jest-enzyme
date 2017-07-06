import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../src/components/search_bar';
import renderer from 'react-test-renderer';
import {toJson,shallowToJson} from 'enzyme-to-json';
import {shallow} from 'enzyme';

describe('Component: App', () => {

  it('renders without exploding',() =>{
  const tree = shallow(<SearchBar />);
  console.log(tree.state());
  expect(tree).toHaveLength(1);
  });

  it('should match its empty SearchBar snapshot', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('verifying shallow way of snapshot', () => {
    const component = shallow(<SearchBar />);
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();

  });

  it('it renders props correctly', () => {
    const tree = shallow(<SearchBar className="search-bar" />);
    expect(tree.instance().props.className).toBe('search-bar');

  });














});
