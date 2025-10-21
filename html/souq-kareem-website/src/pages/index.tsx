import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MarketingBanner from '../components/MarketingBanner';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>سوق كريم - الصفحة الرئيسية</title>
        <meta name="description" content="مرحبًا بكم في سوق كريم، حيث تجدون أفضل المنتجات." />
      </Head>
      <Header />
      <main>
        <MarketingBanner />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;