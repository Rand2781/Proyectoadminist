import React from 'react'


export default function Login() {
  return (

    <div className="LogView d-flex justify-content-center aling-items-center">
        <form className="logForm_Form container col col-sm-6 col-md-6 col-xl-5 bg-dark mt-4 p-3 rounded-3"> 
            <p className="text-white text-center fs-6">INICIAR SESION</p>

            <input type="email" class="form-control"  placeholder="Ingrese Email"/>
            <input type="password" class="form-control mt-3" placeholder="Ingrese Contraseña"/>
          
            <button variant="primary" type="submit" className="btn btn-info btn-lg btn-block Title-1 mt-3">
                Ingresar
            </button>
            <p className="text-white text-center mt-3">¿Olvidaste tu Contraseña?</p>
        </form>
    </div>   

  )
}
