import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Navbar from './Navbar';
import Gallery from './Gallery';
import Faq from './Faq';
import Footer from './Footer';

const Hero = () => {
  return (
    <div className='hero min-vh-100 w-100' id='home'>
        <Container>
            <Row>
                <Col>
                <h1 className='text-white text-center fs-1 animate__animated animate__fadeInUp'>Meccanizam Discus Fish Farm</h1>
                <p className='text-white text-center text-white-50 animate__animated animate__fadeInUp animate__delay-1s'> A satisfied customer is the best business strategy of all</p>

                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Hero;