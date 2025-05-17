import { FiUsers } from "react-icons/fi";
import { BsFuelPump, BsGearFill } from "react-icons/bs";

function CarSpecs({ car }) {
  return (
    <div className="d-flex gap-3 specs-wrapper">
      <div className="spec-item">
        <BsFuelPump />
        <span>{car.fuelCapacity}</span>
      </div>
      <div className="spec-item">
        <BsGearFill />
        <span>{car.transmission}</span>
      </div>
      <div className="spec-item">
        <FiUsers />
        <span>{car.people}</span>
      </div>
    </div>
  );
}

export default CarSpecs;
