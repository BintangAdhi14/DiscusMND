import React from 'react'
import Nav from './Nav'

function HomeAdmin( {Toggle} ) {
  return (
    <div className='px-3'>
        <Nav Toggle={Toggle}/>
        <div className='container-fluid'>
            <div className='row g-3 my-2'>
                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>1000</h3>
                            <p className='fs-5'>Products</p>
                        </div>
                        <i className='bi bi-cart-plus p-3 fs-1'></i>
                    </div>
                </div>
                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>500</h3>
                            <p className='fs-5'>Sales</p>
                        </div>
                        <i className='bi bi-currency-dollar p-3 fs-1'></i>
                    </div>
                </div>
                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>500</h3>
                            <p className='fs-5'>Delivery</p>
                        </div>
                        <i className='bi bi-truck p-3 fs-1'></i>
                    </div>
                </div>
            </div>
        </div>
        <table class="table caption-top bg-white rounded mt-2">
            <caption className='text-white fs-4'>Products</caption>
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nama</th>
      <th scope="col">Jumlah</th>
      <th scope="col">Harga</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Blue Leopard Snake</td>
      <td>20</td>
      <td>Rp.1.500.000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>BlueLSS</td>
      <td>20</td>
      <td>Rp.1.600.000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>GoldenHB</td>
      <td>20</td>
      <td>Rp.1.000.000</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>LeopardHB</td>
      <td>20</td>
      <td>Rp.900.000</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Leopard Mozaik</td>
      <td>20</td>
      <td>Rp.1.900.000</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>LeopardR</td>
      <td>20</td>
      <td>Rp.1.500.000</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Leopard Ring</td>
      <td>20</td>
      <td>Rp.1.800.000</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Mozaik Leopard</td>
      <td>20</td>
      <td>Rp.1.000.000</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Pantera</td>
      <td>20</td>
      <td>Rp.1.000.000</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default HomeAdmin