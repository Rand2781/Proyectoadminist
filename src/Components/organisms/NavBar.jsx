import React from 'react'
import {Link} from 'react-router-dom'
export default function NavBar() {
  return (
    <div className='col-12 bg-dark'>
        <nav class="container navbar navbar-expand navbar-light bg-dark">
            <div class="collapse navbar-collapse">
              <div class="navbar-nav">
                <Link to='/Agregar-producto' className='Link'>
                  <a class="nav-link text-white" aria-current="page">Agregar Productos</a>
                </Link>
                <Link to='/Editar-Producto' className='Link'>
                <a class="nav-link text-white" aria-current="page">Editar Producto</a>
                </Link>
                <Link to='/Register' className='Link'>
                <a class="nav-link text-white" aria-current="page">Agregar Usuario</a>
                </Link>
              </div>
            </div>
   
        </nav>
    </div>
  )
}
