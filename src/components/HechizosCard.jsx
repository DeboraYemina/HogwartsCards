
import Card from 'react-bootstrap/Card';
import './HechizosCard.css'

export const HechizosCard = ({ hechizoMap }) => {
    console.log(hechizoMap)
    return (
        <Card className="carta">
            <Card.Body className="card-body carta-body">
                <Card.Title className="carta-titulo" >{hechizoMap.hechizo}🪄 </Card.Title>
                <Card.Text className="carta-texto">
                    {hechizoMap.uso}
                </Card.Text>
            </Card.Body>
        </Card>
    )

};