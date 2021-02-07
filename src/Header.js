import { Form } from "react-bootstrap"
import { Navbar, Nav, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto menuSec">
                <Link to="/add">Add Product</Link>
                <Link to="/update">Update Product</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Header