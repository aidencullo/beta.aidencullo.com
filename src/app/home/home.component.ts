import { Component } from '@angular/core';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    faGithub = faGithub;
    faFile = faFile;
    faLinkedin = faLinkedin;
    faStackOverflow = faStackOverflow;
    
    title = "Welcome!";
    description = "My name is Aiden. I'm a software engineer based out of NYC. I have professional webdev experience in React, Vue, and Node. I am interested in using technology to remedy social issues such as housing, immigration, and education.";
    personals = [
        {
            name: "github",
            link: "https://github.com/aidencullo",
            icon: faGithub,
        },
        {
            name: "stack",
            link: "https://stackoverflow.com/users/6447634/aiden-cullo",
            icon: faStackOverflow,
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/aiden-cullo-93ba02a4",
            icon: faLinkedin,
        },
        {
            name: "resume",
            link: "/assets/resume.pdf",
            icon: faFile,
        },
    ];
}
