import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Gallery1 from '../assets/img/gallery/BlueLeopardSnakeSkin.jpg';
import Gallery2 from '../assets/img/gallery/BlueLSS.jpg';
import Gallery3 from '../assets/img/gallery/GoldenHB.jpg';
import Gallery4 from '../assets/img/gallery/LeopardHB.jpg';
import Gallery5 from '../assets/img/gallery/LeopardMozaik.jpg';
import Gallery6 from '../assets/img/gallery/LeopardR.jpg';
import Gallery7 from '../assets/img/gallery/YellowPigeon.jpg';
import Gallery8 from '../assets/img/gallery/RedMelon.jpg';
import { useCart } from '../CartContext';

const products = [
  { id: 1, title: 'Blue Leopard Snake Skin', description: 'Dengan pola yang menyerupai kulit ular berbintik biru dan corak yang menawan, ikan ini akan menjadi pusat perhatian di akuarium Anda', price: 1500000, img: Gallery1 },
  { id: 2, title: 'Leopard', description: 'Dengan pola yang menyerupai kulit ular berbintik biru dan corak yang menawan, ikan ini akan menjadi pusat perhatian di akuarium Anda', price: 1500000, img: Gallery2 },
  { id: 3, title: 'Golden High Body', description: 'Dengan pola yang menyerupai kulit ular berbintik biru dan corak yang menawan, ikan ini akan menjadi pusat perhatian di akuarium Anda', price: 1500000, img: Gallery3 },
  { id: 4, title: 'Leopard High Body', description: 'Dengan pola yang menyerupai kulit ular berbintik biru dan corak yang menawan, ikan ini akan menjadi pusat perhatian di akuarium Anda', price: 1500000, img: Gallery4 },
  { id: 5, title: 'Leopard Mozaik', description: 'Dengan pola yang menyerupai kulit ular berbintik biru dan corak yang menawan, ikan ini akan menjadi pusat perhatian di akuarium Anda', price: 1500000, img: Gallery5 },
  { id: 6, title: 'Leopard Ring', description: 'Dengan pola yang menyerupai kulit ular berbintik biru dan corak yang menawan, ikan ini akan menjadi pusat perhatian di akuarium Anda', price: 1500000, img: Gallery6 },
  { id: 7, title: 'Yellow Pigeon', description: 'Dengan pola yang menyerupai kulit ular berbintik biru dan corak yang menawan, ikan ini akan menjadi pusat perhatian di akuarium Anda', price: 1500000, img: Gallery7 },
  { id: 8, title: 'Red Melon', description: 'Dengan pola yang menyerupai kulit ular berbintik biru dan corak yang menawan, ikan ini akan menjadi pusat perhatian di akuarium Anda', price: 1500000, img: Gallery8 },
];

function Catalog() {
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />
      <div className='catalog'> 
        <Container>
          <Row>
            <Col>
              <h3 className='text-center fw-bold'>Produk Belanja</h3> 
            </Col>
          </Row>
          <Row className='row-cols-lg-4 row-cols-1 g-4'>
            {products.map((product) => (
              <Col key={product.id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      {product.description}
                    </Card.Text>
                    <Card.Text>
                      Rp{product.price.toLocaleString()}
                    </Card.Text>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Catalog;
