import React, { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MainNavbar.scss";

// components
import { ReactComponent as Logo } from "../../assets/img/Logo.svg";

export const MainNavbar = () => {
  const navbar = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        navbar.current.classList.add("scrolled");
      } else {
        navbar.current.classList.remove("scrolled");
      }
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" ref={navbar}>
      <Container>
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <span>Home</span>
            </Link>
            <Link className="nav-link" to="/about">
              <span>About</span>
            </Link>
            <Link className="nav-link" to="/portofolio">
              <span>Portofolio</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
