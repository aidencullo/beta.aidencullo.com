import { Item } from '../../shared/models/item';

export interface List {
    name: string,
    id: number,
    items: Item[],
}
