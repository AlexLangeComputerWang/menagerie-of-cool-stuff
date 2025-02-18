import React from "react";
import {JavascriptDocs} from "./Pages/Temporal/JavascriptDocs.jsx";
import {CSSDocs} from "./Pages/Upcoming CSS/CSSDocs.jsx";
import {ReactDocs} from "./Pages/ReactDocs/ReactDocs.jsx";


export const pageContent = {
    homepage: {
        title: 'Upcoming Web Features',
        content: 'Here are a handful of upcoming features that I think are pretty neat!'
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
        content: <ReactDocs/>
    }
}
