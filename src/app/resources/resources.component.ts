import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
    selector: 'app-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

    title = "My Resources";
    description = "This is a collection of resources I've found useful in my own endeavors";
    lists: List[] = [];

    constructor(private listService: ListService) { }

    ngOnInit(): void {
        this.getLists();
    }

    getLists(): void {
        this.listService.getLists()
            .subscribe(lists => this.lists = lists);
    }

}
