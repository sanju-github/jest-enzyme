//app_test.js is to test app.js component. Here we verify if test "React simple starter" is present.
// we imports from test helper file. that is test_helper.js
//to run tests: npm run test:watch . Watch reexcutes when ever there is any change in test file.

import React from 'react';
import {shallow, mount, render} from 'enzyme';
import { expect } from 'chai';
import App from '../src/index';

// Use 'describe' to group together similar testss
describe('App', () => { //name of the component we are testing.

  it('App component exists', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('SearchBar')).to.exist;
    //expect(shallow(<App />).find('.search-bar')).to.exist;

  });

  // it('shows a comment list', () => {
  //
  //     expect(component.find('.comment-list')).to.exist;
  // });

});
