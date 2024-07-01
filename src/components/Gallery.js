import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Gallery1 from '../assets/img/gallery/Ikan1.jpg';
import Gallery2 from '../assets/img/gallery/ikan2.jpg';
import Gallery3 from '../assets/img/gallery/ikan3.jpg';
import Gallery4 from '../assets/img/gallery/ikan4.jpg';
import Gallery5 from '../assets/img/gallery/ikan5.jpg';
import Gallery6 from '../assets/img/gallery/ikan6.jpg';

const Gallery = () => {
  return (
    <div className='gallery min-vh-100 d-flex align-items-center' id='gallery'>
      <Container>
        <Row className='row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4'>
          <Col>
            <img src={Gallery1} alt='unsplash.com' className='w-100' data-aos="fade-up" data-aos-duration="1000"/>
          </Col>
          <Col>
            <img src={Gallery2} alt='unsplash.com' className='w-100' data-aos="fade-up" data-aos-duration="1000"/>
          </Col>
          <Col>
            <img src={Gallery3} alt='unsplash.com' className='w-100' data-aos="fade-up" data-aos-duration="1000"/>
          </Col>
          <Col>
            <img src={Gallery4} alt='unsplash.com' className='w-100' data-aos="fade-up" data-aos-duration="1000"/>
          </Col>
          <Col>
            <img src={Gallery5} alt='unsplash.com' className='w-100' data-aos="fade-up" data-aos-duration="1000"/>
          </Col>
          <Col>
            <img src={Gallery6} alt='unsplash.com' className='w-100' data-aos="fade-up" data-aos-duration="1000"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Gallery