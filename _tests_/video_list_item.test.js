import React from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from '../src/components/video_list_item';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

describe('Component: App', () => {


  it('should match its empty video_list_item snapshot', () => {
    const tree = renderer.create(<VideoListItem />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
