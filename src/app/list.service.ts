import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

    getItems(): Observable<Item[]> {
        const items = of(ITEMS);
        return items;
    }
    
    constructor() { }
}
