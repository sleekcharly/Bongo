import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
import numeral from 'numeral';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            alt={name}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">
            {name.length > 25 ? `${name.slice(0, 26)}...` : name}
          </p>
          <p className="product-price">${`${numeral(price).format('0,0')}`}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
