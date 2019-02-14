// Link.react.test.js
import React from 'react';
import AddItem from '../Components/AddItem/AddItem';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';


describe('Render AddItem', () => {
  it('render correctly AddItem component', () => {
    const AddItemComponent = renderer.create(<AddItem />).toJSON();
    expect(AddItemComponent).toMatchSnapshot();
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
      AddItemComponent = mount(<AddItem {...props} />);
    expect((AddItemComponent).prop('categories')).toEqual(props.categories);
  });

});