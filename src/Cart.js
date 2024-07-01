import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    // Implement payment processing here (e.g., API call to payment gateway)
    // Simulate BCA transfer processing
    alert('Instruksi pembayaran via BCA telah dikirim ke email Anda.');
    setPaymentSuccess(true);
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className='Cart'>
        <Container>
          <h3 className='text-center fw-bold'>Keranjang Belanja</h3>
          <Row>
            {cart.map((item) => (
              <Col key={item.id} className='mb-4'>
                <div className='d-flex align-items-center'>
                  <img src={item.img} alt={item.title} style={{ width: '100px', marginRight: '20px' }} />
                  <div>
                    <h5>{item.title}</h5>
                    <p>Rp{item.price.toLocaleString()}</p>
                    <div className='d-flex align-items-center'>
                      <Button variant='secondary' size='sm' onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                      <span className='mx-2'>{item.quantity}</span>
                      <Button variant='secondary' size='sm' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                    </div>
                    <Button variant='danger' size='sm' onClick={() => removeFromCart(item.id)}>Hapus</Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <h4>Total Harga: Rp{getTotalPrice().toLocaleString()}</h4>

          {paymentSuccess ? (
            <div className="alert alert-success" role="alert">
              Pembayaran berhasil! Terima kasih atas pembelian Anda.
            </div>
          ) : (
            <>
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Bayar Sekarang
              </Button>

              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Informasi Pembayaran</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handlePayment}>
                    <Form.Group controlId="formName">
                      <Form.Label>Nama</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan nama Anda"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Masukkan email Anda"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                      <Form.Label>Alamat</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan alamat Anda"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formPaymentMethod">
                      <Form.Label>Metode Pembayaran</Form.Label>
                      <Form.Control as="select" required>
                        <option value="bca">Transfer via BCA</option>
                        {/* Tambahkan opsi metode pembayaran lain jika diperlukan */}
                      </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Bayar Sekarang
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
            </>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
