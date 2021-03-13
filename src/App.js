
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import AgregarProductoView from './Views/AgregarProductoView'
import EditarProductoView from './Views/EditarProductoView'
import LoginView from './Views/LoginView'
import RegisterView from './Views/RegisterView'

function App() {
  return (
    <BrowserRouter>
      <Switch>
    
        <Route exact path='/Agregar-producto' component={AgregarProductoView}/>
        <Route exact path='/Editar-Producto' component={EditarProductoView}/>
        <Route exact path='/' component={LoginView}/>
        <Route exact path='/Register' component={RegisterView}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
