
import React from 'react';
import './Banner.css'; // Import CSS file for styling
import { Col, Container, Row,Image } from 'react-bootstrap';
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';

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
