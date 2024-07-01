import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
function Footer() {
  return (
    <div className='footer pb-3 pt-4'>
        <Container>
            <Row>
                <Col>
                <h3 className='fw-bold text-white'> DiscusMND </h3>
                </Col>
                <Col className='text-end'>
                <a href='https://www.facebook.com/lulu.adepuspa' target='_blank' rel='noopener noreferrer'>
                <i className='fa-brands fa-facebook text-white fs-1 mx-lg-3 mx-2'></i>
                </a>
                <a href='https://wa.me/+62895703066665' target='_blank' rel='noopener noreferrer'>
                <i className='fa-brands fa-whatsapp text-white fs-1 mx-lg-3 mx-2'></i>
                </a>
                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=adiwicaksono41@gmail.com' target='_blank' rel='noopener noreferrer'>
                <i className='fa-regular fa-envelope text-white fs-1 mx-lg-3 mx-2'></i>
                </a>
                </Col>
            </Row>
            <Row>
                <Col>
                <p className='text-center text-white-50'> &copy; Copyright by DiscusMND 2024, All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer