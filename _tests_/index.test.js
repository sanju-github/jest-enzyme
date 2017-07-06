import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/index';
import renderer from 'react-test-renderer';
import {toJson,mountToJson} from 'enzyme-to-json';
import {mount} from 'enzyme';

describe('Component: App', () => {


  it('verifying mount way of snapshot', () => {
    const component = mount(<App />);
    const tree = mountToJson(component);
    expect(tree).toMatchSnapshot();

  });
});
