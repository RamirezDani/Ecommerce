import './App.css';
import Usuarios from './components/Usuarios';
import Inicio from './components/Inicio';
import {Productos} from './components/Productos';
import Ventas from './components/Ventas';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { CreaProducto } from './components/CreaProducto';


function App() {



  return (
   
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h1>SkateShop</h1>

            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
              <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                <li className="nav-item " >
                  <Link className="nav-link active"
                    to="/productos" >Productos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"
                    to="/ventas" >Ventas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"
                    to="/usuarios" >Usuarios</Link>
                </li>
              </ul>
            {/* </div> */}
          </div>
        </nav>

        

        <Switch>

          <Route exact path="/" component={Inicio}/>          
          <Route path="/productos" component={Productos}/>           
          <Route path="/ventas" component={Ventas} />
          <Route path="/usuarios" component={Usuarios}/>
          <Route exact path="/lista-productos/:id" component={CreaProducto}/>

        </Switch>

      </Router>
    
  );
}

export default App;

