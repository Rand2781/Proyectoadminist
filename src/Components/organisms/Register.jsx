import React from 'react'

export default function Register() {
    return (

    <div className="LogView d-flex justify-content-center aling-items-center">
        <form className="logForm_Form container col col-sm-6 col-md-6 col-xl-5 bg-dark mt-4 p-3 d-grid gap-4">
            <div>
                <h1 className='text-white mb-4 text-center'>Agregar Producto</h1>
            </div>
            <div className="row">
                <div className="col">

                <label for="exampleFormControlInput1" class="form-label text-white">Nombres</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese Nombres y Apellidos"/>
                  
                </div>
            </div>
            <div className="row">
                <div className="col">
                <label for="exampleFormControlInput1" class="form-label text-white">DNI</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese DNI"/>

                    
                </div>
            </div>
            <div className="row">
                <div className="col">
                <label for="exampleFormControlInput1" class="form-label text-white">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese Email"/>
                            

                </div>
            </div>
            <div className="row">
                <div className="col">
                <label for="exampleFormControlInput1" class="form-label text-white">Número de Teléfono</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese Teléfono"/>
                    
                </div>
            </div>
            <div className="row">
                <div className="col">
                <label for="exampleFormControlInput1" class="form-label text-white">Contraseña</label>
                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese Contraseña"/>
                </div>
            </div>
            <button variant="primary" type="submit" className="btn btn-info btn-lg btn-block Title-1 mt-3">
                Registrar
            </button>
            
        </form>
    </div>

    )
}
