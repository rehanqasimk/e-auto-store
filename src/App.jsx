import Navbar from "./components/Navigation";
import { Container } from "react-bootstrap";
import CarCatalog from "./components/ProductCatalog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Container fluid className="bg-light py-4">
        <CarCatalog />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
