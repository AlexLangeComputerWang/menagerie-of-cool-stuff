import React from 'react';
import UseApiDoc from './UseApiDoc.jsx';
import UseFormStatusDoc from './UseFormStatusDoc.jsx';
import UseTransitionDoc from './UseTransitionDoc.jsx';
import {UseOptimisticDoc} from './UseOptimisticDoc.jsx';
import ReactCompilerDoc from './ReactCompilerDoc.jsx';

export const ReactDocs = () => {
    return <>
        <h1>React Docs Page</h1>
        <UseApiDoc />
        <UseFormStatusDoc />
        <UseTransitionDoc />
        <UseOptimisticDoc />
        <ReactCompilerDoc />
    </>;
};