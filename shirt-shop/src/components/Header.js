// I M P O R T   P A C K A G E S
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useContext } from "react";


// I M P O R T   C O N T E X T
import ColorContext from "../context/colorContext";


// Styles Import
import '../styles/header.scss';
import "../styles/App.scss"


// Files Import
import sherds from "../data/products";


const Header = ({setFilterList, currColor}) => {
  const inputHandler = (event)=>{
    event.preventDefault()
    const searchTerm = event.target.value
    const newFilter = sherds.filter(sherd => 
      sherd.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
      sherd.author.toLocaleLowerCase().includes(searchTerm.toLowerCase()) ||
      sherd.date.includes(searchTerm))
    setFilterList(newFilter)
  }
  const [colorContext] = useContext(ColorContext);

  return (
<Navbar expand="lg" className="shadow-lg sticky-top navbar">
    <Container fluid className="d-flex justify-content-between">
      <Navbar bg="dark">
        <Container>
        <Navbar.Brand href="#home" className="text-white header-hl">
        <span style={{color: colorContext[currColor]}}>{"nerd"}</span>sherd
        </Navbar.Brand>
        </Container>
      </Navbar>


      <Navbar.Toggle aria-controls="navbarScroll" className="border border-light"/>
      <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
        </Nav>
        <Form onChange={(event)=>inputHandler(event)} className="d-flex justify-content-end">
          <div className="input-group">
            <input type="text" 
              className="me-2 form-control searchfield" placeholder="Search" 
              aria-label="Username" aria-describedby="basic-addon1" 
              onChange={(event)=>inputHandler(event)}/>
            </div>
            <Link className="link" to="/favoriten">
              <Button
              variant="outline-dark"
              className="me-2 text-white border border-light circle"
              >
              <FontAwesomeIcon className="heart"
                icon={faHeart}/>  
              </Button>
            </Link>
            <Link className='link' to="/shoppingCart">
              <Button
              variant="outline-dark"
              className="me-2 text-white border border-light circle">
              <FontAwesomeIcon
                icon={faCartShopping} />              
              </Button>
            </Link>

        </Form>
      </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;
