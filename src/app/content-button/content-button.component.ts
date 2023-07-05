import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-content-button',
    templateUrl: './content-button.component.html',
    styleUrls: ['./content-button.component.css']
})
export class ContentButtonComponent {
    @Output() booleanEvent = new EventEmitter<boolean>();

    emitBoolean() {
        this.booleanEvent.emit(true);
    }
}
