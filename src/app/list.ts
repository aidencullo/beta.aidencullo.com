import { Item } from './item';

export interface List {
    name: string,
    id: number,
    items: Item[],
}
