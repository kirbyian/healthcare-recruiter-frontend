
import React from 'react';
import './Banner.css'; // Import CSS file for styling
import { Container } from 'react-bootstrap';


interface BannerProps {
  text: string;
  color: string;
}

const Banner: React.FC<BannerProps> = ({ text, color }) => {
  return (
    <Container className="banner" style={{ backgroundColor: color }}>
      <p className='banner-text'>{text}</p>
    
    </Container>
  );
};

export default Banner;
