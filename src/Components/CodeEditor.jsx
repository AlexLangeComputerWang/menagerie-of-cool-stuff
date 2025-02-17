import React from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'; // For the code editor styles
import 'codemirror/mode/javascript/javascript'; // JavaScript mode for syntax highlighting

export const CodeEditor = ({ code, setCode, disabled }) => {
    return (
        <ControlledEditor
            value={code}
            onBeforeChange={(editor, data, value) => {
                !disabled && setCode(value);
            }}
            options={{
                mode: 'javascript',
                lineNumbers: true,
            }}
        />
    );
};
