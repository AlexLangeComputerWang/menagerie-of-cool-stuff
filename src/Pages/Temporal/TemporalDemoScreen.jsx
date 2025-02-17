import React, {useEffect, useState} from "react";
import "./TemporalDemoScreen.css"
import {CodeEditor} from "../../Components/CodeEditor.jsx";
import { Temporal } from "@js-temporal/polyfill";
// Polyfill should be initialized at the top level to ensure it's available globally


export const TemporalDemoScreen = ({documentation=[0]}) => {
    const [selectedDocument, setSelectedDocument] = useState(documentation[0]);
    const [output, setOutput] = useState(null);




    const handleRun = () => {
        const result = executeCode(selectedDocument.codeSnippetString)
        console.log("Result of Execution",result)
        setOutput(result);
    };

    const executeCode = (code) => {
        let result = '';
        console.log("Executing the following function, here's the eval!", { code });

        // Backup original console.log
        const originalConsoleLog = console.log;

        // Override console.log to capture logs
        console.log = (message) => {
            result += message + '\n'; // Add each log to the result string
            setOutput((prevOutput) => prevOutput + message + '\n'); // Append to the output panel
        };

        // Same for other console methods
        const originalConsoleError = console.error;
        console.error = (message) => {
            result += `Error: ${message}\n`;
            setOutput((prevOutput) => prevOutput + `Error: ${message}\n`);
        };

        try {
            // Execute the code
            eval(code); // Or use Function() for a safer alternative
        } catch (error) {
            result += `Error: ${error.message}\n`;
            setOutput((prevOutput) => prevOutput + `Error: ${error.message}\n`);
        }

        // Restore the original console.log
        console.log = originalConsoleLog;
        console.error = originalConsoleError;
        return result; // Return the final result for optional further processing
    };



    return selectedDocument ? <div className="container">
        <div className="left-panel">
            <div className={"educative-tabs"}>
                {documentation.map(doc => {
                    return <button key={doc.name} className={"educative-button"}
                                   onClick={() => setSelectedDocument(doc)}>{doc.name}</button>
                })}
            </div>
            {selectedDocument.htmlToRender}
            <div className="temporal-editor-container">
                <p>Javascript</p>
                <CodeEditor
                    language={'javascript'}
                    code={selectedDocument.codeSnippetString}
                    setCode={setSelectedDocument}
                    disabled={true}
                />
            </div>
            <button className={'execute-button'} onClick={handleRun}>Run</button>
        </div>
        <div className="right-panel">
            <h2>Output:</h2>
                {output && <pre>{output}</pre>}
            </div>
    </div> : "Loading..."
}