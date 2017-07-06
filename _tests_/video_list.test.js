import React from 'react';
import ReactDOM from 'react-dom';
import VideoList from '../src/components/video_list';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

describe('Component: App', () => {


  it('should match its empty video list snapshot', () => {
    const tree = renderer.create(<VideoList />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
