import { Button, Card } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";
import CarSpecs from "../CarSpecs";
import "./index.css";

function CarCard({ car }) {
  return (
    <Card className="h-100 border-light">
      <Card.Body>
        <div className="d-flex justify-content-between mb-3">
          <div>
            <h3 className="h6 fw-bold mb-1">{car.name}</h3>
            <p className="small text-muted mb-0">{car.type}</p>
          </div>
          <Button variant="link" className="p-0 text-muted">
            <FiHeart size={20} className={car.liked ? "text-danger" : ""} />
          </Button>
        </div>

        <div className="car-image-wrapper mb-3">
          <img src={car.image} alt={car.name} className="img-fluid" />
        </div>

        <CarSpecs car={car} />

        <div className="d-flex justify-content-between align-items-end mt-3">
          <div>
            <div className="fw-bold">
              ${car.price}
              <span className="text-muted fw-normal">/day</span>
            </div>
            {car.originalPrice && (
              <small className="text-muted text-decoration-line-through">
                ${car.originalPrice}
              </small>
            )}
          </div>
          <Button variant="primary">Rent Now</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CarCard;
