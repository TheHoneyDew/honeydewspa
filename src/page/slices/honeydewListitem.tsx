import * as React from "react";
import { HoneydewList } from "../../type/honeydewTypes"

export interface HoneydewListItemProps {
    honeydewitems: HoneydewList[];
    onItemSelected: Function;
}

export const HoneydewListitem = () => {

    const honeydewItems: HoneydewList[] = [
        {
            ownerId: "123456",
            title: "Home",
            listId: "123qwe4",
            createdUTC: new Date().toISOString()
        },
        {
            ownerId: "123456",
            title: "Garage",
            listId: "123qwe5",
            createdUTC: new Date().toISOString()
        },
        {
            ownerId: "123456",
            title: "Lawn",
            listId: "123qwe6",
            createdUTC: new Date().toISOString()
        },
        {
            ownerId: "123456",
            title: "Work",
            listId: "123qwe7",
            createdUTC: new Date().toISOString()
        },
    ];

    return (
        <ul>
            {honeydewItems.map((item) => <li key={item.listId} onClick={() => alert(`Happy now ${item.listId}`)}>{item.title}</li>)}
        </ul>
    );
}