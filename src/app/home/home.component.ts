import { Component } from '@angular/core';
import { VERSION } from '@angular/compiler';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    title = "Aiden's new website";
    quote = "\"If debugging is the process of removing software bugs, then programming must be the process of putting them in.\"";
    author = "Edsger W. Dijkstra";
}
