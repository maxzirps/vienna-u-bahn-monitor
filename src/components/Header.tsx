import React, { FunctionComponent } from "react";
import { Header as SemanticHeader, Container } from "semantic-ui-react";

const Header: FunctionComponent = () => (
  <Container id="header">
    <SemanticHeader as="h1">Underground Time Lapse</SemanticHeader>
  </Container>
);

export default Header;
