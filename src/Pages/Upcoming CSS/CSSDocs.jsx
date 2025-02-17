import React, { useState } from 'react';
import { BasicHtmlCssJsxEditor } from "../../Components/BrowserEditors/BasicHtmlCssJsxEditor.jsx";
import { cssDocumentation } from "./cssDocumentation.jsx";
import "./CSSApi.css";

export const CSSDocs = () => {
    const [doc, setSelectedDocument] = useState(() => {
        const savedPage = sessionStorage.getItem('currentCSSPage');
        return savedPage ? savedPage : cssDocumentation[0].name;
    });

    const documentation = cssDocumentation.find(d => d.name === doc);

    const handleCSSPageChange = async (newDocument) => {
        if (newDocument.name === doc) return;
        setSelectedDocument(newDocument.name);
        sessionStorage.setItem('currentCSSPage', newDocument.name);
    };

    return (
        <>
            {cssDocumentation.map(doc => (
                <button key={doc.name} className="css-button" onClick={() => handleCSSPageChange(doc)}>
                    {doc.name}
                </button>
            ))}
                <div key={doc} view-transition-name="csspage" className="csspage">
                    {documentation && (
                        <BasicHtmlCssJsxEditor
                            {...(documentation.defaultHtml && {htmlIn: documentation.defaultHtml})}
                            {...(documentation.defaultCss && {cssIn: documentation.defaultCss})}
                            {...(documentation.defaultJs && {jsIn: documentation.defaultJs})}
                            disabled={false}
                            documentation={documentation.documentation}
                            hideResult={documentation.hideResult}
                        />
                    )}
                </div>
            </>
            );
            };
