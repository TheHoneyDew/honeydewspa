import Button from "@restart/ui/esm/Button";
import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { HoneydewListitem } from "./slices/honeydewListitem";
import { HoneydewAccordion } from "./slices/honeydewAccordion";

export const Honeydew = () => {
    return(
        <div>
            <h1>welcome to Honeydew</h1>
            <Row>
                <Col md={3}>
                    <div style={{backgroundColor:"red"}} >
                        <input/>
                        <Button>Submit</Button>
                        <HoneydewListitem />
                    </div>
                </Col>
                <Col md={9}>
                    <div style={{backgroundColor:"green"}} >
                        <HoneydewAccordion/>
                    </div>
                </Col>
            </Row>
            <p>
                the goal of this page is to house a simple todo list.  
                Eventually there will be list creaters and list workers, 
                users will have multiple lists, and groups of people that 
                complete the items in the lists.  They will be able to 
                search for lists, search for people, request workers join 
                their lists, assign work to workers, etc
            </p>
        </div>
    );
}