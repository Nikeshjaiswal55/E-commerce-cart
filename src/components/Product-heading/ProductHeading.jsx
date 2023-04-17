import React from 'react';

const ProductHeading = ({heading,bgcolor}) => {
    return (
        <>
            <h1 className={`p-3 ${bgcolor} text-center mt-4 text-light`}>{heading}</h1>
        </>
    );
};

export default ProductHeading;