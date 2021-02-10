import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'
function Header() {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('User-info'));
   // console.warn(user);
    function logout() {
        localStorage.clear();
        history.push('/login');
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto menuSec">
                {
                    localStorage.getItem('User-info') ?
                        <>
                            <Link to="/add">Add Product</Link>
                            <Link to="/update">Update Product</Link>
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                }
            </Nav>
            {localStorage.getItem('User-info') ?
                <NavDropdown title={user && user.name}>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
                : null
            }
        </Navbar>
    )
}

export default Header