import { PersonajesCard } from './PersonajesCard';
import { HechizosCard } from './HechizosCard';
import { useState, useEffect } from 'react';
import { get } from '../utils/ConexionApis';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const AlbumGrid = ({ type }) => {
  const { casa } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let personajesResponse = await get("personajes");
        let hechizosResponse = await get("hechizos");

        let responseData = [];

        if (type === "default") {
          responseData = [...personajesResponse, ...hechizosResponse];
        } else if (type === "personajes") {
          responseData = personajesResponse;
        } else if (type === "hechizos") {
          responseData = hechizosResponse;
        }
        else if (type === "casa") {
          responseData = personajesResponse.filter(item => item.casaDeHogwarts === casa);
        }

        setItems(responseData);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchData();
  }, [type, casa]);

  return (
    <Container>
      <Row>
        {items.map((item, index) => (
          <Col key={index} xs={12} sm={12} md={6} lg={4} xl={3} className="mb-4">
            {'personaje' in item ? (
              <PersonajesCard key={item.id} characterMap={item} />
            ) : (
              <HechizosCard key={item.id} hechizoMap={item} />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

