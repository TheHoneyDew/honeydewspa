import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

export interface NavigationBarProps {
    userName:string;
}

const NavigationBar = (props: NavigationBarProps) =>{    

    function SignInText(userName:string) {
        if(userName === '') {
            return <><Link to="/login">Sign in</Link></>
        } else {
            return <>Signed in as: <Link to="/login">{userName}</Link></>
        }
    }
    
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Honeydew lists</Navbar.Brand>                
                <Navbar.Toggle/>
                <Navbar.Collapse role="navigation" id="Honeydew-navigation-bar">
                    <Nav className="me-auto">
                        {/* <NavLink exact={true} to="/">home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/login">Sign In</NavLink>                        
                        <NavLink to="/fizzBuzz">FizzBuzz</NavLink> */}
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="/about" >About</Nav.Link>
                        <Nav.Link href="/login" >Sign in</Nav.Link>
                        <Nav.Link href="/fizzbuzz" >Fizz Buzz</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse role="navigation" id="Honeydew-navigation-bar-signin" className="justify-content-end">
                    <Navbar.Text>
                        { SignInText(props.userName) }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;