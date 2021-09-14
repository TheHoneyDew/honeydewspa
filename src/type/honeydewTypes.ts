
export interface HoneydewList {
    ownerId: string;
    listId: string;
    title: string;
    createdUTC: string;
}

export interface HoneydewListItem {
    parentListId: string;
    title: string;
    description: string;
    createdUTC: string;
    bounty?: string;
    completedUTC?: string;
    assignedDoer?: string;
    pictures?: string[];
}

