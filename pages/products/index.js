import Card from '/components/Card';
import Slider from '/components/Slider';
import Navbar from '../../components/Navbar/Navbar';
import products from "../../data/products";


const Home = ({ products }) => {
  return (
    <>
      <Navbar products={products} />
      <Slider />
      <Card products={products} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      products,
    },
  };
}
