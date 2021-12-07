# OR-Product-Card

Este es un paquete de prueas de despliegue en NPM

### Orlin Alvarado

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons }  from 'or-product-card';
```
```
<ProductCard 
    product={ product }
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />     
                
            </>
        )
    }
    
</ProductCard>
```
