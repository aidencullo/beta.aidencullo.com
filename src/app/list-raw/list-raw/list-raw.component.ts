import { Component, Input } from '@angular/core';
import { List } from '../../list/models/list';

@Component({
  selector: 'app-list-raw',
  templateUrl: './list-raw.component.html',
  styleUrls: ['./list-raw.component.css']
})
export class ListRawComponent {
    @Input() list!: List;
}
