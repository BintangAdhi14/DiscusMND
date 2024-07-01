import React from 'react';

const Payment = ({ order }) => {
    if (!order) {
        return <div></div>
    }
  return (
    <div className="payment">
      <h2>Pembayaran Transfer BCA</h2>
      <p>Nama: {order.name}</p>
      <p>Alamat: {order.address}</p>
      <p>No. Telepon: {order.phone}</p>
      <p>Silakan transfer ke rekening berikut:</p>
      <p><strong>BCA: 1234567890</strong></p>
      <p>Atas Nama: PT. Keranjang Kuning</p>
      <p>Jumlah: Rp {order.total}</p>
    </div>
  );
};

export default Payment;
