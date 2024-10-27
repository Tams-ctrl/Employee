import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar style={{background: "#707793",}}>
        <Container >
          <Navbar.Brand href="/Landing">
          <i className="fa-solid fa-clipboard fa-xl me-2" style={{color: "#8e00c2",}}/>
            {' '}
            Workers
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header