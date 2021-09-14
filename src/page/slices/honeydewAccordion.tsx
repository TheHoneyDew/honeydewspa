import Button from "@restart/ui/esm/Button";
import * as React from "react";
import { Accordion } from "react-bootstrap";
import { HoneydewListItem } from "../../type/honeydewTypes"

export interface HoneydewListitemProps {
    items?: HoneydewListItem[];
}

export const HoneydewAccordion = (props: HoneydewListitemProps) => {

    const items: HoneydewListItem[] = [
        {
            parentListId: "123qwe4",
            title: "Sweep the kitchen",
            bounty: "Kisses",
            description: "sweeping the floor is never just sweeping the floor.  you must do the dishes, wipe the counter, clear the table, then you can sweep the floor.",
            createdUTC: new Date().toISOString(),
            assignedDoer: "numbertwo",

        },
        {
            parentListId: "123qwe4",
            title: "clean the bathroom",
            description: "you have to clean off the counter, the mirror, the toilet, the shower, and the floor",
            createdUTC: new Date().toISOString(),
            assignedDoer: "numbertwo",
            
        },
        {
            parentListId: "123qwe4",
            title: "vacuum",
            description: "living room, kitchen, dinningroom, hall.  forget the bedrooms.  the cord doesn't reach...",
            createdUTC: new Date().toISOString(),
            assignedDoer: "numbertwo",
            
        },
    ]

    const item = items[0];

    if(items === undefined || items.length < 1){
        return (
            <div>
                this list has no items
            </div>
        );
    }

    return (
        <div>
            there are {items.length} items in this list.
            <Accordion>
                {
                    items.map((item, index) => 
                        <Accordion.Item key={index.toString()} eventKey={index.toString()} >
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <p>
                                        description: {item.description}
                                    </p>
                                    {item.assignedDoer === undefined ? <Button>Assign to me</Button> : `asigned to: ${item.assignedDoer}` }
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                }                
            </Accordion>
        </div>
    );
}