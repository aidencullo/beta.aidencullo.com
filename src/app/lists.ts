import { List } from './list/models/list';

const articles = {
    name: "articles",
    id: 0,
    items: [
        {
            title: 'Weaponizing the Internet',
            link: 'https://www.rappler.com/nation/148007-propaganda-war-weaponizing-internet/',
        },
        {
            title: 'Social Media Disinformation',
            link: 'https://www.technologyreview.com/2021/11/20/1039076/facebook-google-disinformation-clickbait/',
        },
    ],
}

const espanol = {
    name: "espanol",
    id: 1,
    items: [
        {
            title: 'The Spanish Dude',
            link: 'https://www.youtube.com/@elspanishdude/',
        },
        {
            title: 'Easy Spanish',
            link: 'https://www.youtube.com/@EasySpanish/',
        },
    ],
}

const javascript = {
    name: "javascript",
    id: 2,
        items: [
        {
            title: 'Eloquent JS',
            link: 'https://eloquentjavascript.net/',
        },
        {
            title: 'JS: The Good Parts',
            link: 'https://www.oreilly.com/library/view/javascript-the-good/9780596517748/',
        },
    ],

}


const css = {
    name: "css",
    id: 3,
    items: [
        {
            title: 'Flexbox',
            link: 'https://flexboxfroggy.com/',
        },
        {
            title: 'Grid',
            link: 'https://cssgridgarden.com/',
        },
    ],
}


const theory = {
    name: "theory",
    id: 4,
    items: [
        {
            title: 'Computerphile',
            link: 'https://www.youtube.com/@Computerphile',
        },
        {
            title: 'Fireship',
            link: 'https://www.youtube.com/@Fireship',
        },
    ],
}



export const LISTS: List[] = [
    articles,
    espanol,
    javascript,
    css,
    theory,
];
