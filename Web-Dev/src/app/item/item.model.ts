export interface Item{
    id: number;
    title: string;
    description: string;
    category_id: number,
    type: string;
    created_at: Date;
}

export interface NewItem {
    title: string;
    description: string;
}