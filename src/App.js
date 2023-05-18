import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from './Components/header';
import Galeria from "./Components/card";
import Pie from './Components/footer'


function App() {
  return (
    <div className="container">
      <Titulo title='Galeria de Imágenes con React' />
      <div className="row">
        <Galeria titulo="Gatito" descripcion="Soy un gato en blanco y negro" foto="http://placekitten.com/g/200/300" />
        <Galeria titulo="Gatito" descripcion="Soy un gato en blanco y negro" foto="http://placekitten.com/g/200/300" />
        <Galeria titulo="Gatito" descripcion="Soy un gato en blanco y negro" foto="http://placekitten.com/g/200/300" />
      </div>
      <div className="row">
        <Galeria titulo="Gatito" descripcion="Soy un gato en blanco y negro" foto="http://placekitten.com/g/200/300" />
        <Galeria titulo="Gatito" descripcion="Soy un gato en blanco y negro" foto="http://placekitten.com/g/200/300" />
        <Galeria titulo="Gatito" descripcion="Soy un gato en blanco y negro" foto="http://placekitten.com/g/200/300" />
      </div>
      <Pie footer="La anterior galeria es una galeria minimalista de gatitos en blanco y negro la cual se expresa en escala de grises."/>
    </div>
  )
}

export default App;