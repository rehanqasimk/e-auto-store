import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  const footerLinks = [
    {
      title: "About",
      links: ["How it works", "Featured", "Partnership", "Business Relation"],
    },
    {
      title: "Community",
      links: ["Events", "Blog", "Podcast", "Invite a friend"],
    },
    {
      title: "Socials",
      links: ["Discord", "Instagram", "Twitter", "Facebook"],
    },
  ];

  return (
    <footer className="bg-white py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={4} className="mb-4 mb-lg-0">
            <h2 className="h4 text-primary mb-4">LOGO</h2>
            <p className="text-muted">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </Col>
          {footerLinks.map((section, index) => (
            <Col key={index} sm={6} lg={2}>
              <h3 className="h6 mb-4">{section.title}</h3>
              <ul className="list-unstyled">
                {section.links.map((link, i) => (
                  <li key={i} className="mb-2">
                    <a href="#" className="text-muted text-decoration-none">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
        <hr />
        <Row className="pt-4">
          <Col sm={6} className="mb-3 mb-sm-0">
            <p className="mb-0">©2024 MORENT. All rights reserved</p>
          </Col>
          <Col sm={6} className="text-sm-end">
            <a href="#" className="text-decoration-none text-dark me-4">
              Privacy & Policy
            </a>
            <a href="#" className="text-decoration-none text-dark">
              Terms & Condition
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
