// Link.react.test.js
import React from 'react';
import Loading from '../Components/Loading/Loading.js';
import renderer from 'react-test-renderer';


describe('Render Loading', () => {
  it('render correctly Loading component', () => {
    const LoadingComponent = renderer.create(<Loading />).toJSON();
    expect(LoadingComponent).toMatchSnapshot();
  });
});