import { Item } from '../.././models/item';

export interface List {
    name: string,
    id: number,
    items: Item[],
}
