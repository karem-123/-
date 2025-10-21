import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/globals.css';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>عن سوق كريم</h1>
        <p>
          سوق كريم هو منصة إلكترونية تهدف إلى توفير تجربة تسوق مريحة وسهلة للمستخدمين. نحن نقدم مجموعة واسعة من المنتجات عالية الجودة بأسعار تنافسية.
        </p>
        <p>
          نحن نؤمن بأهمية خدمة العملاء ونسعى جاهدين لتلبية احتياجات عملائنا من خلال تقديم أفضل المنتجات والخدمات.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;