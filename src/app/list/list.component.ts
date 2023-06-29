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
    title: String = "articles";
    selected: Boolean = false;

    ngOnInit(): void {
        this.getItems();
    }

    select(): void {
        this.selected = !this.selected;
    }
    
    getItems(): void {
        this.listService.getItems()
            .subscribe(items => this.items = items);
    }
    
    constructor(public listService: ListService){}
}
