import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { List } from '../models/list';

import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    
    list: List | undefined;

    ngOnInit(): void {
        this.getList();
    }

    constructor(
        private route: ActivatedRoute,
        private listService: ListService,
        private location: Location
    ) {}

    getList(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.listService.getList(id)
            .subscribe(list => this.list = list);
    }

    goBack(): void {
        this.location.back();
    }    
}
