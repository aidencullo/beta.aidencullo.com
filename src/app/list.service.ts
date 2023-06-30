import { Injectable } from '@angular/core';
import { List } from './list';
import { LISTS } from './lists';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListService {

    constructor() {}

    getLists(): Observable<List[]> {
        const lists = of(LISTS);
        return lists;
    }

    getList(id: number): Observable<List> {
        // For now, assume that a list with the specified `id` always exists.
        // Error handling will be added in the next step of the tutorial.
        console.log(LISTS)
        console.log(id)
        const list = LISTS.find(h => h.id === id)!;
        return of(list);
    }
    
}
