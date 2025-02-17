import React from 'react';


export const ViewTransitionsDoc = () => {
    return (
        <section>
            <h3>Understanding View Transitions in CSS</h3>
            <p>
                The View Transitions API allows for seamless animations between different states of a webpage,
                making UI updates smoother and more visually appealing.
            </p>

            <a href={"https://view-transitions.chrome.dev/profiles/mpa/"}>Cool demo by the Chrome DevRel team</a><br/>
            <a href={"https://view-transitions.chrome.dev/cards/spa/"}>Another cool Chrome Demo (wow so original)</a><br/>
            <a href={"https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API"}>Documentation</a>
            <h2>View-Transition-Old vs View-Transition-New</h2>
            <ul>
                <li><strong><code>view-transition-old</code>:</strong> Represents the state of the element before the transition starts.</li>
                <li><strong><code>view-transition-new</code>:</strong> Represents the state of the element after the transition completes.</li>
            </ul>

            <h4>All of the page transitions for this application use View Transitions! That's the demo!</h4>

            <h2>Browser Support</h2>
            <p>
                The View Transitions API is an emerging feature and is currently supported in some modern browsers.
                Developers should verify compatibility before using it in production environments.
            </p>
        </section>
    );
}

export const viewTransitionsDoc =   {
    name:"View Transitions",
    hideResult:true,
    documentation:<ViewTransitionsDoc/>
}