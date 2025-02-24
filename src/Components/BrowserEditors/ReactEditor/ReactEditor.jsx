import React, {useState } from "react";
import { CodeEditor } from "../../CodeEditor.jsx";

export const ReactEditor = () => {
    const [js, setJs] = useState(`function App() {
        return React.createElement('h1', null, 'Hello, world!');
    }`);

    const output = () => {
        return `
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Sandbox</title>
      </head>
      <body>
        <div id="reactroot"></div>
        <script type="module">
          import React from 'https://esm.sh/react';
          import ReactDOM from 'https://esm.sh/react-dom/client';

          try {
              ${js}
              ReactDOM.createRoot(document.getElementById('reactroot')).render(React.createElement(App));
          } catch (err) {
              document.getElementById('reactroot').innerHTML = '<pre style="color:red;">' + err + '</pre>';
          }
        </script>
      </body>
    </html>
  `;
    };

    return <>
        <div className="editor-box">
            <p>Javascript</p>
            <CodeEditor language={'javascript'} code={js} setCode={setJs} />
        </div>
        <iframe
            title="Result"
            className="result-iframe"
            srcDoc={output()}
        />
    </>;
};
