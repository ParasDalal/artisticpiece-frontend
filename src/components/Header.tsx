import React from "react";
import { UserIcon } from "./Icons";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Home } from "../pages/Home";

export const Header = () => (
  <div>
    <Router>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="#home">ArtisticPiece</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Link href="/Training">Training</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact component={(props: any) => <Home {...props} />} />
    </Router>
  </div>
);
