import React from "react";
import {JavascriptDocs} from "./Pages/Temporal/JavascriptDocs.jsx";
import {CSSDocs} from "./Pages/Upcoming CSS/CSSDocs.jsx";


export const pageContent = {
    homepage: {
        title: 'Upcoming Web Features',
        content: 'This is a demonstration of CSS View Transitions API.\n' +
            'Click the navigation links to see different transition effects! (Animated page change via view transitions)'
    },
    javascript: {
        title: 'Upcoming Javascript Changes  ☕',
        content: <JavascriptDocs/>
    },
    css: {
        title: '🆕 CSS Ideas and Concepts',
        content: <CSSDocs/>
    },
    react19: {
        title: 'React 19 🍹',
        content: 'Watch how different sections of the page animate during navigation!'
    }
}
