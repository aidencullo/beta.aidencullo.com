import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() links!: { name: string; link: string; icon: IconDefinition; }[];
}
