import React, { FunctionComponent } from "react";
import { Header as SemanticHeader, Container } from "semantic-ui-react";

const Header: FunctionComponent = () => (
  <Container id="header">
    <SemanticHeader as="h1">Time Machine</SemanticHeader>
  </Container>
);

export default Header;
