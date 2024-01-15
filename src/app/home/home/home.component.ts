import { Component } from '@angular/core';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    faGithub = faGithub;
    faFile = faFile;
    faEnvelope = faEnvelope;
    faLinkedin = faLinkedin;
    faStackOverflow = faStackOverflow;

    title = "Welcome!";
    description = `My name is Aiden. I'm a software engineer based out
    of New York City. I have professional experience in Frontend/Backend development, specializing in Vue, React, and Node.`;
    links = [
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
            link: "https://www.linkedin.com/in/aidencullo",
            icon: faLinkedin,
        },
        {
            name: "resume",
            link: "./assets/resume.pdf",
            icon: faFile,
        },
        {
            name: "mail",
            link: "mailto:aidencullo@gmail.com",
            icon: faEnvelope,
        },
    ];

}
