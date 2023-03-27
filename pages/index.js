import Card from '/components/Card';
import Slider from '/components/Slider';
import Navbar from '../components/Navbar/Navbar';
import Head from 'next/head';
import products from "../data/products";


const Home = ({ products }) => {
  return (
    <>
      <Head>
        <title>Ecommerce with NextJS</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          property='og:title'
          content='Ecommerce website with NextJS'
          key=''
        />
        <meta name='description' content='Ecommerce website with NextJS' />
        <meta property='og:image' content='/images/nextjs.png' />
        <meta
          property='og:description'
          content='Ecommerce website with NextJS'
        />
      </Head>
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

