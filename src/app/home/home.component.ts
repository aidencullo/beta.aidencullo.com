import { Component } from '@angular/core';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    clicked = false;
    title = `Angular ${ VERSION.full} is rad!`;

    // boat data
    boat = {
	name: 'Starfire',
	year: 1977,
	img: 'assets/boat.jpg'
    };

    
    handleClick() {
	console.log("click handled!")
	this.clicked = true;
    }
    
}
