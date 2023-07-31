import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { List } from './models/list';
import { LISTS } from '../lists';

@Injectable()

export class ListService {

    getLists(): Observable<List[]> {
        const lists = of(LISTS);
        return lists;
    }

    getList(id: number): Observable<List> {
        // For now, assume that a list with the specified `id` always exists.
        // Error handling will be added in the next step of the tutorial.
        const list = LISTS.find(h => h.id === id)!;
        return of(list);
    }
    
}
