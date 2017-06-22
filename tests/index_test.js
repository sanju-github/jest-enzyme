//app_test.js is to test app.js component. Here we verify if test "React simple starter" is present.
// we imports from test helper file. that is test_helper.js
//to run tests: npm run test:watch . Watch reexcutes when ever there is any change in test file.
import { renderComponent, expect} from '../test_helper';
import App from '../../src/app'; //component file to test.



// Use 'describe' to group together similar tests
describe('App',() => {//name of the component we are testing.


    let component;

    beforeEach(() =>{

        component = renderComponent(App);


    });

    it('shows a comment box', () => {

        expect(component.find('.comment-box')).to.exist;

    });

    it('shows a comment list', () => {

        expect(component.find('.comment-list')).to.exist;
    });

});
