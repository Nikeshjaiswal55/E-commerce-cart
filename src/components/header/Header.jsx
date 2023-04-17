import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai"
import { NavLink } from 'react-router-dom';
import "./Header.css"
import { useSelector } from 'react-redux';
import ProductCart from '../product-detail/ProductCart';


function Header() {
    const expand = 'xl';
    const count=useSelector((item)=>item.product.cart)
    return (
        <>
            <Navbar key={expand} bg="light" expand={expand} className="header_height">
                <Container fluid>
                    {/* <Navbar.Brand to="/" className='header_logo px-0 px-lg-5'>nikkkStore</Navbar.Brand> */}
                    <Navbar.Brand to="/" className='header_logo px-0 px-lg-5'>cogniSun</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <div className='d-flex align-items-center'><NavLink to="/"><AiFillHome className='header_icon' /></NavLink></div>
                                <div className='d-flex align-items-center px-0 px-lg-4'><Nav.Link ><FaUserAlt className='header_icon' /></Nav.Link></div>
                                <div className='d-flex flex-column flex-lg-row align-items-lg-center'>
                                    <div className='dropdown'>

                                <NavLink to="/cart"> <div className='position-relative'>
                                        <FaShoppingCart className='header_icon' />
                                        <span className='counter'></span>
                                        <span className='counter2 text-light'>{count.length}</span>
                                    </div></NavLink >

                                    <div className='dropdown-menu'><ProductCart /></div>
                                    </div>
                                    <NavDropdown id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <ProductCart />
                                    </NavDropdown>
                                </div>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;