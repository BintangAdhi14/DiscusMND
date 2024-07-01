import React, { useState } from "react";

const OrderForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, address, phone});
    };

return (
    <form onSubmit={handleSubmit}>
        <h2>Form Pemesanan</h2>
        <div>
            <label>Nama :</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
            <label>Alamat :</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required/>
        </div>
        <div>
            <label>No. Telepon :</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
        </div>
        <button type="submit">Pesan</button>
    </form>
);
};


export default OrderForm;