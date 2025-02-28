import React from 'react';
import UseApiDoc from './UseApiDoc.jsx';
import ActionsDoc from './ActionsDoc.jsx';
import {UseOptimisticDoc} from './UseOptimisticDoc.jsx';
import ReactCompilerDoc from './ReactCompilerDoc.jsx';

export const ReactDocs = () => {
    return <>
        <a href={"https://react.dev/blog/2024/12/05/react-19"}>Release Notes as of Dec 2024</a>
        <UseApiDoc />
        <ActionsDoc />
        <UseOptimisticDoc />
        <ReactCompilerDoc />
    </>;
};