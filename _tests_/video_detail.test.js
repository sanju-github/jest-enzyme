import React from 'react';
import ReactDOM from 'react-dom';
import VideoDetail from '../src/components/video_detail';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

describe('Component: App', () => {


  it('should match its empty video_detail snapshot', () => {
    const tree = renderer.create(<VideoDetail />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
