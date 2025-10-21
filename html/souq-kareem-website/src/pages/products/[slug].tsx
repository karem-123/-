import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductDetail from '../../components/ProductDetail';
import { fetchProductBySlug } from '../../lib/api';

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const getProduct = async () => {
        const productData = await fetchProductBySlug(slug);
        setProduct(productData);
        setLoading(false);
      };
      getProduct();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;