import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
         <Navbar className="bg-light border border-2 shadow ">
         <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-list-check fa-bounce m-2"></i>
            <span className='fw-bolder text-success'>Track Tasks</span>
          </Navbar.Brand>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header