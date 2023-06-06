import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    title = "Welcome!";
    description = "My name is Aiden. I'm a software engineer based out of NYC. I have professional webdev experience in React, Vue, and Node. I am interested in using technology to remedy social issues such as housing, immigration, and education.";
    personals = [
        {
            name: "github",
            link: "https://github.com/aidencullo",
        },
        {
            name: "stack",
            link: "https://stackoverflow.com/users/6447634/aiden-cullo",
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/aiden-cullo-93ba02a4",
        },
        {
            name: "resume",
            link: "/assets/resume.pdf",
        },
    ];
}
