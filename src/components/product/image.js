import React from 'react';
import imagePlaceholder from 'assets/images/image.png';

function ProductImage({ alt, src, ...props }) {
    return (
        <img src={src || imagePlaceholder} alt={alt} {...props} />
    );
}

export default ProductImage;
