import React, {Suspense} from 'react';
import {use} from 'react';
import {CodeEditor} from "../../Components/CodeEditor.jsx";


const UseApiDoc = () => {
    const commentsPromise = Promise.resolve([
        { id: 1, text: "This is a great post!" },
        { id: 2, text: "Really insightful, thanks for sharing." },
        { id: 3, text: "I learned something new today." }
    ]);

    return (
        <div>
            <h2>New 'use' API.</h2>
            <p>You can read a promise with use, and React will Suspend until the promise resolves. You can also read context with use, allowing you to read Context conditionally such as after early returns</p>
            <br/>
            <p>The use API can only be called in render, similar to hooks. Unlike hooks, use can be called conditionally. In the future the react team plans to support more ways to consume resources in render with use.</p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{flex:'0 0 50%'}}>
                    <CodeEditor
                        code={codeAsString}
                        setCode={() => {}}
                        disabled
                        language={"javascript"}
                    />
                </div>
                <div style={{flex:'0 0 50%'}}>
                    <Page commentsPromise={commentsPromise}/>
                </div>
            </div>
        </div>

    );
};



export default UseApiDoc;


function Comments({commentsPromise}) {
    // `use` will suspend until the promise resolves.
    const comments = use(commentsPromise);
    return comments.map(comment => <p key={comment.id}>{comment.text}</p>);
}

function Page({commentsPromise}) {
    // When `use` suspends in Comments,
    // this Suspense boundary will be shown.
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Comments commentsPromise={commentsPromise} />
        </Suspense>
    )
}


const codeAsString = `
const commentsPromise = Promise.resolve([
        { id: 1, text: "This is a great post!" },
        { id: 2, text: "Really insightful, thanks for sharing." },
        { id: 3, text: "I learned something new today." }
]);


function Comments({commentsPromise}) {
    // \`use\` will suspend until the promise resolves.
    const comments = use(commentsPromise);
    return comments.map(comment => <p key={comment.id}>{comment.text}</p>);
}



function Page({commentsPromise}) {
    
    
    // When \`use\` suspends in Comments,
    // this Suspense boundary will be shown.
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Comments commentsPromise={commentsPromise} />
        </Suspense>
    )
}
`