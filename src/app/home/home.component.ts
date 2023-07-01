import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { TitleComponent } from '../title/title.component';
import { DescriptionComponent } from '../description/description.component';
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
    description = "My name is Aiden. I'm a software engineer based out of Buenos Aires, AR. I have professional experience in Frontend/Backend development, specializing in Vue, React, and Node.";
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
            link: "https://www.linkedin.com/in/aiden-cullo-93ba02a4",
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
