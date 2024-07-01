import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold fs-4" href="#">DiscusMND</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="ms-auto text-center navbar-nav">
        <li class="nav-item mx-2">
          <a class="nav-link active" aria-current="page" onClick={() => navigate("/")}>Home</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" onClick={() => navigate("/Catalog")}>Catalog</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="#gallery">Gallery</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="#services">Service</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="#faq">FAQ</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" >
            <i class='fa-solid fa-cart-shopping' onClick={() => navigate("/cart")}></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
