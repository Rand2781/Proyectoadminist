import React from 'react'


export default function ButtonMap() {
  return (
    <div>
      <Link
        to="/nosotros/nuestras-tiendas"
        className="Button-Map"
      >
        <i
          className="fas fa-map-marked-alt fa-2x"
        ></i>
        <p>Nuestras<br></br>Tiendas</p>
      </Link>
    </div>
  )
}
