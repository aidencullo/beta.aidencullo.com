import { Component } from '@angular/core';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    clicked = false;
    title = `Angular ${ VERSION.full} is rad!`;

    // boat data
    boats = [
	{
	name: 'Starfire',
	year: 1977,
	img: 'assets/boat.jpg'
	},
	{
	name: 'Oracle',
	year: 2015,
	img: 'assets/boat2.jpg'
	}
    ];
    
    handleClick() {
	console.log("click handled!")
	this.clicked = true;
    }
    
}
