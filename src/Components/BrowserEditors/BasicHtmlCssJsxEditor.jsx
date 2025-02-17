import React, { useEffect, useState } from 'react';
import { CodeEditor } from "../CodeEditor.jsx";
import './BasicHtmlCssJsxEditor.css';

export const BasicHtmlCssJsxEditor = ({ htmlIn, cssIn, jsIn, disabled,documentation, hideResult }) => {
    const [html, setHtml] = useState(htmlIn || '');
    const [css, setCSS] = useState(cssIn || '');
    const [js, setJs] = useState(jsIn || '');
    const [srcDoc, setSrcDoc] = useState(''); // Holds the combined output

    // Update the internal state when props change
    useEffect(() => {
        setHtml(htmlIn || '');
    }, [htmlIn]);

    useEffect(() => {
        setCSS(cssIn || '');
    }, [cssIn]);

    useEffect(() => {
        setJs(jsIn || '');
    }, [jsIn]);

    useEffect(()=>{
        handleExecuteJS()
    },[html,css,js]);

    // Function to create the combined output
    const createOutput = () => {
        return `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `;
    };

    // Handler for the "execute JS" button
    //TODO: FIX THIS!
    const handleExecuteJS = () => {
        setSrcDoc(createOutput());
    };

    return (
        <div className="editorcontainer">
            <div className="left-panel">
                {documentation && documentation}
                {htmlIn &&
                <div className="editor-box">
                    <p>Html</p>

                        <CodeEditor language={'htmlmixed'} code={html} setCode={setHtml} disabled={disabled} />
                </div>
                }
                {cssIn &&
                <div className="editor-box">
                    <p>CSS</p>
                    <CodeEditor language={'css'} code={css} setCode={setCSS} disabled={disabled} />
                </div>
                }
                {jsIn &&<>
                <div className="editor-box">
                    <p>Javascript</p>
                    <CodeEditor language={'javascript'} code={js} setCode={setJs} disabled={disabled} />
                </div>

                {/* Plain button with no classname */}
                <button onClick={handleExecuteJS}>execute JS</button>
                </>
                }
            </div>
            {!hideResult &&
            <div className="right-panel">
                <h3>Result:</h3>
                <iframe
                    title="Result"
                    className="result-iframe"
                    srcDoc={srcDoc}
                />
            </div>
            }
        </div>
    );
};
