import React from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'; // For the code editor styles
import 'codemirror/mode/javascript/javascript'; // JavaScript mode for syntax highlighting
import 'codemirror/mode/htmlmixed/htmlmixed.js'; // HTML mode for syntax highlighting
import 'codemirror/mode/css/css.js'; // CSS mode for syntax highlighting

export const CodeEditor = ({ code, setCode, disabled,language}) => {
    return (
        <ControlledEditor
            value={code}
            onBeforeChange={(editor, data, value) => {
                !disabled && setCode(value);
            }}
            options={{
                mode: language,
                lineNumbers: true,
            }}
        />
    );
};
