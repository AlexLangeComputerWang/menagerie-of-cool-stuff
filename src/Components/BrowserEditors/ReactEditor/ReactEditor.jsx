import React, {useState } from "react";
import "./ReactEditor.css"
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

    return <div className="react-editor-container">
        <div className={'react-left-panel'}>
            <div className="react-editor-box">
                <p>Javascript</p>
                <CodeEditor language={'javascript'} code={js} setCode={setJs} />
            </div>
        </div>
        <div className={'react-right-panel'}>
            <iframe
                title="Result"
                className="react-result-iframe"
                srcDoc={output()}
            />
        </div>
    </div>;
};
