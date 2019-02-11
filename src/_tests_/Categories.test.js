// Link.react.test.js
import React from 'react';
import Categories from '../Components/Categories/Categories';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';


describe('Render Categories', () => {
  it('render correctly Categories component', () => {
    const CategoriesComponent = renderer.create(<Categories />).toJSON();
    expect(CategoriesComponent).toMatchSnapshot();
  });

  it('render add item correctly with empty value', () => {
    const props = {
      categories: [{
        "-LWq4zi73h0wVpz3GfSx": {
          "items": {
            "-LY7w3-bFFYz_WGpN94V": {
              "name": "Oranges"
            }
          },
          "name": "Fruit&Veg"
        }
      }]
    },
      CategoriesComponent = mount(<Categories {...props} />);
    expect((CategoriesComponent).prop('categories')).toEqual(props.categories);
  });

});