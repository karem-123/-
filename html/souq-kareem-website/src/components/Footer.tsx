import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '20px', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} سوق كريم. جميع الحقوق محفوظة.</p>
      <nav>
        <a href="/about" style={{ color: '#ffffff', margin: '0 10px' }}>حول</a>
        <a href="/contact" style={{ color: '#ffffff', margin: '0 10px' }}>اتصل بنا</a>
      </nav>
    </footer>
  );
};

export default Footer;