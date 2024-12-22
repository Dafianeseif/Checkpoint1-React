// src/Image.js
import React from 'react';
import product from './Product';

const Image = () => {
  return <img src={product.image} alt={product.name} style={{ width: '200px' }} />;
};

export default Image;
