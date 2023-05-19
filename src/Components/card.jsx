import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const Galeria = ({titulo = 'titulo de foto', descripcion = 'Aqui va una descripcion de la foto', foto = 'Link de imagen'}) => {
    return (
        <div className="col m-2 ">
            <Card id="card" style={{ width: "18rem" }}>
                <Card.Title className="fs-4 fw-bold">{titulo}</Card.Title>
                <Card.Img className="img" variant="top" src={foto}/>
                <Card.Text className="text-center">{descripcion}</Card.Text>
            </Card>
        </div>
    )
}

export default Galeria