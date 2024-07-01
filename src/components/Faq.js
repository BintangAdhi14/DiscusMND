import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

function Faq() {
    return (
        <div className='faq' id='faq'>
            <Container>
                <Row className='mb-5'>
                    <Col>
                    <h2 className='text-center fw-bold'> Yang Biasa di Tanyakan </h2>
                    <p className='text-center'> Lorem Ipsum dolor </p>
                    </Col>
                </Row>
                <Row className='row-cols-lg-2 row-cols-1 g-4'>
                    <Col>
                    <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Bagaimana cara membeli ikan discus di DiscusMND ini ?</Accordion.Header>
            <Accordion.Body>
             Anda dapat membeli ikan discus dengan mencari ikan yang tersedia di katalog, menambahkannya
             kedalam keranjang belanja, dan mengikuti proses pembayaran yang tersedia 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
                    </Col>
                    <Col>
                    <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Metode pembayaran apa saja yang diterima ?</Accordion.Header>
            <Accordion.Body>
             Kami hanya menerima pembayaran via transfer BCA saja. 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
                    </Col>
                    <Col>
                    <Accordion>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Bagaimana proses pengiriman ikan discus?</Accordion.Header>
            <Accordion.Body>
              Setelah Anda membayar, Anda diminta untuk screenshoot bukti pembayaran dan kirim ke WA owner 
              yang tersedia di halaman pembayaran dan penjual akan mengirim informasi pelacakan dari nomer WA tersebut
              sehingga Anda tetap dapat melihat pelacakan. 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
                    </Col>
                    <Col>
                    <Accordion>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Bagaimana cara menghubungi layanan pelanggan?</Accordion.Header>
            <Accordion.Body>
              Anda dapat menghubungi whatsapp yang tertera atau hubungi facebook kami : Meccanizam Discus Fish Farm 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
                    </Col>
                </Row>
            </Container>

        </div>
      );
}

export default Faq