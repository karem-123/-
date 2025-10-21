import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/dark-theme.css';

const ProductDetail = ({ product }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.productDetail}>
      <h1 className={styles.productTitle}>{product.name}</h1>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>${product.price}</p>
      <button className={styles.addToCartButton}>إضافة إلى السلة</button>
    </div>
  );
};

export default ProductDetail;