import React from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css';

export const StyleEditor = ({ code, setCode, disabled }) => {
    return (
        <ControlledEditor
            value={code}
            onBeforeChange={(editor, data, value) => {
                !disabled && setCode(value);
            }}
            options={{
                mode: 'css',
                lineNumbers: true,
            }}
        />
    );
};
