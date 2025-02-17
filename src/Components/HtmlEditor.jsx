import React from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'; // For the code editor styles
import 'codemirror/mode/htmlmixed/htmlmixed'; // JavaScript mode for syntax highlighting

export const HtmlEditor = ({ code, setCode, disabled }) => {
    return (
        <ControlledEditor
            value={code}
            onBeforeChange={(editor, data, value) => {
                !disabled && setCode(value);
            }}
            options={{
                mode: 'htmlmixed',
                lineNumbers: true,
            }}
        />
    );
};
