import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PersonajesCard.css';

export const PersonajesCard = ({ characterMap }) => {

  const getHouseClass = (house) => {
    switch (house) {
        case 'Gryffindor':
            return 'gryffindor';
        case 'Slytherin':
            return 'slytherin';
        case 'Hufflepuff':
            return 'hufflepuff';
        case 'Ravenclaw':
            return 'ravenclaw';
        case 'ninguna':
            return 'ninguna';
        default:
            return '';
    }
};

const houseClass = getHouseClass(characterMap.casaDeHogwarts);

const getTextClass = (house) => {
  if (house === 'Gryffindor' || house === 'Ravenclaw') {
      return 'golden-text';
  } else if (house === 'Slytherin' || house === 'Hufflepuff') {
      return 'silver-text';
  } else if (house === 'ninguna') {
      return 'black-text';
  }
  return '';
};

const textClass = getTextClass(characterMap.casaDeHogwarts);

    return (
        <Card className={`${houseClass} todos`}>
          <Card.Img className={`${houseClass}-image`} variant="top" src={characterMap.imagen} />
          <Card.Body className="card-body">
            <Card.Title className={textClass}>{characterMap.personaje}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className={textClass}><b>Apodo:</b> {characterMap.apodo}</ListGroup.Item>
            <ListGroup.Item className={textClass}><b>Interpretado por:</b> {characterMap.interpretado_por}</ListGroup.Item>
          </ListGroup>
        </Card>
    );
};

