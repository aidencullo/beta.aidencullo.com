import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Item } from '../item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    
    items: Item[] = [];

    ngOnInit(): void {
        this.getItems();
    }
    
    getItems(): void {
        this.listService.getItems()
            .subscribe(items => this.items = items);
    }
    
    constructor(public listService: ListService){}
}
