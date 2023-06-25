import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UsuariosContext } from '../Context/UserContext';
import { AutosContext } from '../Context/AutosContext';

import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import '../css/bloques.css';

const VistaVehiculo = () => {
  
  const { activeCar } = useContext(AutosContext);
  const { usuarios, activeUser } = useContext(UsuariosContext);
  const infoVendedor = usuarios.find((usuario => usuario.id === activeCar.idusuario));

  return (
    <Container>
        <div className='bloques-cerrado'>
        <br />
        <p className="text-muted">{activeCar.anio} - {activeCar.kilometros} km</p>
        <h4>{activeCar.marca} {activeCar.modelo} {activeCar.version? activeCar.version: ''}</h4>
      
        <Carousel /* className="d-block w-100" */ interval={6000} >
          {activeCar.fotos.map((foto) => (
            <Carousel.Item>
              <img
                style={{ /* minWidth:'100vw', */ maxWidth: '100vw', minHeight: '33vh', maxHeight: '33vh' }}
                /* className="d-block w-100"  */
                src={foto}
                alt=""
              />
            </Carousel.Item>
          ))
          }
        </Carousel>
        <br />
        <h1>$ {activeCar.precio}</h1>
        <br />

        <Accordion defaultActiveKey={['0','1']} alwaysOpen>
          
          <Accordion.Item eventKey="0">
          <Accordion.Header>Características</Accordion.Header>
            <Accordion.Body>
              
              <Table responsive hover striped borderless>
                <tbody >
                  {activeCar.marca ? 
                    <tr>
                      <td>Marca</td>
                      <td>{activeCar.marca}</td>
                    </tr>
                    : <></>}
                  {activeCar.modelo ? 
                    <tr>
                      <td>Modelo</td>
                      <td>{activeCar.modelo}</td>
                    </tr>
                    : <></>}
                  {activeCar.version ? 
                    <tr>
                      <td>Version</td>
                      <td>{activeCar.version}</td>
                    </tr>
                    : <></>}
                  {activeCar.anio ? 
                    <tr>
                      <td>Año</td>
                      <td>{activeCar.anio}</td>
                    </tr>
                    : <></>}
                  {activeCar.kilometros ?
                    <tr>
                      <td>Kilometros</td>
                      <td>{activeCar.kilometros}</td>
                    </tr>
                    : <></>}
                  {activeCar.tipo ? 
                    <tr>
                      <td>Tipo vehiculo</td>
                      <td>{activeCar.tipo}</td>
                    </tr>
                    : <></>}
                  {activeCar.transmision ? 
                    <tr>
                      <td>Transmision</td>
                      <td>{activeCar.transmision}</td>
                    </tr>
                    : <></>}
                  {activeCar.rodado ? 
                    <tr>
                      <td>Rodado</td>
                      <td>{activeCar.rodado}</td>
                    </tr>
                    : <></>}
                  {activeCar.potencia ? 
                    <tr>
                      <td>Potencia(cv o hp)</td>
                      <td>{activeCar.potencia}</td>
                    </tr>
                    : <></>}
                  {activeCar.capacidad_carga ? 
                    <tr>
                      <td>Cap. carga(KG)</td>
                      <td>{activeCar.capacidad_carga}</td>
                    </tr>
                    : <></>}
                  {activeCar.traccion ? 
                    <tr>
                      <td>Traccion</td>
                      <td>{activeCar.traccion}</td>
                    </tr>
                    : <></>}
                  {activeCar.color ? 
                    <tr>
                      <td>Color</td>
                      <td>{activeCar.color}</td>
                    </tr>
                    : <></>}
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          
          <Accordion.Item eventKey="1">
            <Accordion.Header>Descripcion</Accordion.Header>
            <Accordion.Body>
            {activeCar.descripcion_adicional ?
              activeCar.descripcion_adicional
              : `El vendedor no incluyó una ampliacion de los detalles adicionales`}
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
            
        <br />
        <h5>Información del vendedor</h5>
        <Card style={{ width: '100%' }}>
          {activeUser ?   
          <Card.Body>
            <Card.Title>{ infoVendedor.nombre_completo }</Card.Title>
            <Row xs={1} md={3} className='justify-content-center'>
              <Col>
                <Card.Subtitle>Ubicacion</Card.Subtitle>
                  <Card.Text className="mb-2 text-muted">{infoVendedor.localidad}, {infoVendedor.provincia}</Card.Text>
              </Col>
              <Col >
                <Card.Subtitle>Telefono</Card.Subtitle>
                  <Card.Text className="mb-2 text-muted">{infoVendedor.telefono}</Card.Text>
              </Col>
              <Col >
                <Card.Subtitle>Email</Card.Subtitle>
                  <Card.Text className="mb-2 text-muted">{infoVendedor.correo_electronico}</Card.Text>
              </Col>
              </Row>
            </Card.Body>
            : 
            <Card.Body>
              <Row xs={1} md={1} className='justify-content-center'>
              <Col>
                <Card.Text className="mb-2 text-muted">Para poder ver la informacion del vendedor y poder contactarlo deberás loguearte.</Card.Text>
              </Col>
              </Row>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button variant="danger">Loguearme</Button> 
              </Link>
            </Card.Body>
          }
        </Card>
        

        <br />

        <h5>Consejos de seguridad</h5>
        <Row xs={1} md={2} className='justify-content-center'>
          
          <Col /*key={}*/ className='mb-3' >
            <Card style={{ maxWidth: '100%' }}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Seguí estos consejos cuando contactes al vendedor:</Card.Subtitle>
                <Card.Text>
                  Desconfiá si el vendedor dice que vive en el exterior o quiere venderlo muy rápido porque se muda.
                  <br/>
                  Si aseguran que Car Shop tiene el vehículo en un depósito, están mintiendo, no tenemos vehículos. No te contactes más con el vendedor y denunciá su publicación.
                  <br/>
                  Si acordás una visita, verificá la seguridad del lugar.
                  <br/>
                  No confíes en el vendedor si te presiona para que envíes un pago.
                  <br/>
                  Nunca te pediremos contraseñas, PIN o códigos de verificación por teléfono, e-mail o WhatsApp.
                  <br />
                  No compartas estos datos con nadie.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col /*key={}*/ className='mb-3' >
            <Card style={{ maxWidth: '100%' }}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Tené en cuenta esto antes de pagar:</Card.Subtitle>
                <Card.Text>
                  Dudá de ofertas debajo del precio de mercado. Asesorate sobre cual puede ser el rango de precios.
                  <br />
                  No pagues sin verificar personalmente la documentación y el estado del vehículo.
                  <br/>
                  Revisá que no haya impuestos sin pagar y que no tenga multas.
                  <br/>
                  Dudá si la cuenta que te brindan para hacer una transferencia es de un banco desconocido.
                  <br />
                  El precio puede incluir costos adicionales como acarreo, patentamiento y otros costos gubernamentales. Confirma el precio final con el vendedor del vehículo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <p className="text-muted">¿Tuviste algun problema con la publicación? <Link to="/contacto" style={{ textDecoration: 'none' }}>Avisanos</Link></p>
        <p className="text-muted">id de publicacion: { activeCar.id }</p>
        <br />
      </div>
    </Container>
  );
}

export default VistaVehiculo;