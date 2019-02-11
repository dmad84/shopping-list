// Link.react.test.js
import React from 'react';
import Loading from '../Loading';
import renderer from 'react-test-renderer';


describe('Render Loading', () => {
  it('render correctly Loading component', () => {
    const LoadingComponent = renderer.create(<Loading />).toJSON();
    expect(LoadingComponent).toMatchSnapshot();
  });
});