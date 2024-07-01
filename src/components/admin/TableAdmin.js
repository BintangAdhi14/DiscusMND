import React, { useState } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan bootstrap CSS diimport
import '../style.css';

function TableAdmin({ Toggle }) {
  const [products, setProducts] = useState([
    { id: 1, name: 'Blue Leopard Snake', quantity: 20, price: 1500000 },
    { id: 2, name: 'BlueLSS', quantity: 20, price: 1600000 },
    { id: 3, name: 'GoldenHB', quantity: 20, price: 1000000 },
    { id: 4, name: 'LeopardHB', quantity: 20, price: 900000 },
    { id: 5, name: 'Leopard Mozaik', quantity: 20, price: 1900000 },
    { id: 6, name: 'LeopardR', quantity: 20, price: 1500000 },
    { id: 7, name: 'Leopard Ring', quantity: 20, price: 1800000 },
    { id: 8, name: 'Mozaik Leopard', quantity: 20, price: 1000000 },
    { id: 9, name: 'Pantera', quantity: 20, price: 1000000 },
  ]);

  const [newProduct, setNewProduct] = useState({ id: '', name: '', quantity: '', price: '' });
  const [editProduct, setEditProduct] = useState({ id: '', name: '', quantity: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  const addProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({ id: '', name: '', quantity: '', price: '' });
    setShowAddModal(false);
  };

  const startEdit = (product) => {
    setIsEditing(true);
    setEditProduct(product);
    setShowEditModal(true);
  };

  const saveEdit = () => {
    setProducts(products.map(p => (p.id === editProduct.id ? editProduct : p)));
    setIsEditing(false);
    setEditProduct({ id: '', name: '', quantity: '', price: '' });
    setShowEditModal(false);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <Nav Toggle={Toggle} />
      <div className='col-4 col-md-2 bg-primary bg-gradient vh-100 position-fixed'>
        <Sidebar Toggle={Toggle} />
      </div>
      <div className='bg-secondary d-flex justify-content-around rounded'>
        <div className='row g-3 my-2'>
          <button onClick={() => setShowAddModal(true)} className='btn btn-success mb-2'>Add Product</button>
          <table className="table caption-top bg-white rounded mt-2">
            <caption className='text-white fs-4'>Products</caption>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nama</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Harga</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>Rp.{product.price}</td>
                  <td>
                    <button onClick={() => startEdit(product)} className="btn btn-primary">Edit</button>
                    <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      <div className={`modal ${showAddModal ? 'd-block' : ''}`} tabIndex="-1" style={{ display: showAddModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Product</h5>
              <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
            </div>
            <div className="modal-body">
              <input name='name' value={newProduct.name} onChange={handleInputChange} placeholder='Nama' className='form-control' />
              <input name='quantity' value={newProduct.quantity} onChange={handleInputChange} placeholder='Jumlah' className='form-control' />
              <input name='price' value={newProduct.price} onChange={handleInputChange} placeholder='Harga' className='form-control' />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Close</button>
              <button type="button" className="btn btn-primary" onClick={addProduct}>Add</button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Product Modal */}
      <div className={`modal ${showEditModal ? 'd-block' : ''}`} tabIndex="-1" style={{ display: showEditModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Product</h5>
              <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
            </div>
            <div className="modal-body">
              <input name='name' value={editProduct.name} onChange={handleEditChange} placeholder='Nama' className='form-control' />
              <input name='quantity' value={editProduct.quantity} onChange={handleEditChange} placeholder='Jumlah' className='form-control' />
              <input name='price' value={editProduct.price} onChange={handleEditChange} placeholder='Harga' className='form-control' />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Close</button>
              <button type="button" className="btn btn-primary" onClick={saveEdit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableAdmin;
