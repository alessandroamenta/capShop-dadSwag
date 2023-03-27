import ProductPage from '../../components/ProductPage/ProductPage';
import products from '../../data/products';

const Product = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <ProductPage product={product} />
    </>
  );
};

export default Product;

export async function getStaticProps(context) {
  const { params } = context;
  const product = products.find((p) => p.id.toString() === params.id);
  return {
    props: {
      product: product || null,
    },
  };
}

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}
