import React from 'react'

export default function AgregarProducto() {
  return (
    <div className='col d-flex justify-content-center'>
    <div className="col-sx col-sm-6 col-md-6 col-xl-5 p-4  bg-dark d-grid gap-4 mt-4 mb-4">
      
      <div>
        <h1 className='text-white mb-4 text-center'>Agregar Producto</h1>
      </div>
      
      <form>
        <div className='row mb-3'>
          <div className='col'>
            <div class="input-group">
            <span class="input-group-text">Nombre del producto</span>
            <input type="text" class="form-control" placeholder="Producto" aria-describedby="basic-addon1"/>
            </div>
          </div>

        </div>
        <div className='row mb-3'>
          <div className='col'>
            <div class="input-group">
            <span class="input-group-text">Descripcion</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col'>
            <div class="input-group">
              <span class="input-group-text">Precio</span>
              <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
              <span class="input-group-text">.00</span>
            </div>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col'>
            <div class="input-group">
            <span class="input-group-text">Stock</span>
            <input type="text" class="form-control" placeholder="Producto" aria-describedby="basic-addon1"/>
            </div>  
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col'>
            <div class="input-group">
            <span class="input-group-text">Ficha tecnica</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col'>
            <div class="input-group">
              <span class="input-group-text">URL Imagen</span>
              <input type="text" class="form-control" placeholder="Ingresar URL" aria-describedby="basic-addon1"/>
            </div>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col'>
            <div class="input-group ">
              <span class="input-group-text">Imagen Slides</span>
              <input type="text" class="form-control" placeholder="Ingresar URL" aria-describedby="basic-addon1"/>
              <button className="col-2 input-group-text">Agregar</button>
          
            </div>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col'>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>
        </div>
        <div>
          <button className="btn btn-primary">Guardar</button>
        </div>
      </form>
  </div> 
  </div>
  )
}
