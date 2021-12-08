import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';


describe('ProductImage', () => {
    test('debe mostrar el componente correctamente la imagen', () => {
        const wrapper = renderer.create(
            <ProductImage img={ product2.img } />
        );
        
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
  
    test('debe mostrar el componente dentro del componente padre', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage  />
                    )
                }
            </ProductCard>
        );
        
        expect(wrapper.toJSON()).toMatchSnapshot();
    })

});
