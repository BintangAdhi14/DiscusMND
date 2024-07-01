import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Services() {
  return (
    <div className='services min-vh-100 d-flex align-items-center' id='services'>
        <Container>
            <Row className='mb-5'>
                <Col>
                <h1 className='text-center fw-bold'> Services </h1>
                <p className='text-center'>Service yang kami sediakan :</p>
                </Col>
            </Row>
            <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center'>
              <Col className='text-center py-5 px-3 '>
              <i className='fa-solid fa-coins fs-2 mb-4'></i>
              <h5 className='fw-bold'>Harga Terjangkau</h5>
              <p>kami menawarkan berbagai pilihan ikan discus dengan harga terjangkau tanpa mengorbankan kualitas.</p>
              </Col>
              <Col className='text-center py-5 px-3 '>
              <i className='fa-solid fa-thumbs-up fs-2 mb-4'></i>
              <h5 className='fw-bold'>Pelayanan Terbaik</h5>
              <p>Tim kami selalu siap membantu Anda kapan saja, di mana saja. Tidak ada pertanyaan yang terlalu kecil atau masalah yang terlalu besar.</p>
              </Col>
              <Col className='text-center py-5 px-3 '>
              <i className='fa-solid fa-truck-fast fs-2 mb-4'></i>
              <h5 className='fw-bold'>Pengiriman Cepat</h5>
              <p>kami memastikan pengiriman yang cepat dan aman langsung ke pintu Anda.</p>
              </Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default Services