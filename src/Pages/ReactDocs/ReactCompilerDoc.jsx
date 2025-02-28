import React from 'react';

const ReactCompilerDoc = () => {
    return (
        <div>
            <h1>React Compiler</h1>
            <a href={"https://react.dev/learn/react-compiler"}>React Compiler standalone package</a>
            <p>Currently standalone and in Beta. (Though being used in production currently at Meta)</p>
            <br/>
            <p>It is a build-time only tool that automatically optimizes your React app. It works with plain JavaScript, and understands the Rules of React, so you don’t need to rewrite any code to use it.
                The compiler also includes an ESLint plugin that surfaces the analysis from the compiler right in your editor. </p>
            <br/>
            <p>In order to optimize applications, React Compiler automatically memoizes your code. You may be familiar today with memoization through APIs such as useMemo, useCallback, and React.memo. With these APIs you can tell React that certain parts of your application don’t need to recompute if their inputs haven’t changed, reducing work on updates. While powerful, it’s easy to forget to apply memoization or apply them incorrectly. This can lead to inefficient updates as React has to check parts of your UI that don’t have any meaningful changes.
                The compiler uses its knowledge of JavaScript and React’s rules to automatically memoize values or groups of values within your components and hooks. If it detects breakages of the rules, it will automatically skip over just those components or hooks, and continue safely compiling other code.</p>
        </div>
    );
};

export default ReactCompilerDoc;