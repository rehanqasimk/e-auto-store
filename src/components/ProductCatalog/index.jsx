import { Button, Col, Container, Row } from "react-bootstrap";
import { popularCars, recommendationCars } from "../../data/cars";
import CarCard from "../ProductCard";

export default function CarCatalog() {
  return (
    <Container>
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h5 mb-0">Popular Cars</h2>
          <Button variant="link" className="text-primary text-decoration-none">
            View All
          </Button>
        </div>
        <Row>
          {popularCars.map((car) => (
            <Col key={car.id} lg={3} md={6} className="mb-4">
              <CarCard car={car} />
            </Col>
          ))}
        </Row>
      </section>

      <section>
        <h2 className="h5 mb-4">Recommended Cars</h2>
        <Row>
          {recommendationCars.map((car) => (
            <Col key={car.id} lg={3} md={6} className="mb-4">
              <CarCard car={car} />
            </Col>
          ))}
        </Row>
      </section>

      <div className="d-flex justify-content-between align-items-center py-4">
        <Button variant="primary" className="px-4">
          Show more cars
        </Button>
        <span className="text-muted">120 Cars</span>
      </div>
    </Container>
  );
}
