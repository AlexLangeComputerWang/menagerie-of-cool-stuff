import React from 'react';

export const CSSNewScopingDoc = () => {
    return (
        <section>
            <header>
                <h3>Understanding Scoping in CSS</h3>
                <p>
                    <strong> The <code>@scope</code> CSS at-rule </strong> enables you to select elements in specific DOM subtrees, targeting elements precisely without writing overly-specific selectors that are hard to override, and without coupling your selectors too tightly to the DOM structure.
                </p>
            </header>
            <a href={"https://developer.mozilla.org/en-US/docs/Web/CSS/@scope#browser_compatibility"}>Documentation</a>

            <ul>
                <li>
                    <strong>Scoped Styles:</strong> With the new scoping, annotation styles applied within the scope of a specific area, preventing unintended global side-effects.
                </li>
                <li>
                    <strong>Customizable Boundaries:</strong> Unlike strict encapsulation, scoping allows developers to define boundaries where certain styles can either be inherited or remain isolated.
                </li>
                <li>
                    <strong>Enhanced Maintainability:</strong> By isolating component-specific styles, scoping helps in reducing style conflicts and makes large-scale CSS easier to manage.
                </li>
                <li>
                    <strong>Interoperability:</strong> Donut scoping can work alongside other CSS methodologies (like BEM, CSS Modules, or even Shadow DOM) to provide a flexible yet robust styling architecture.
                </li>
            </ul>

            <p>
                This approach is particularly useful in complex UI applications where you need to maintain a balance between
                global consistency and local component encapsulation. Donut scoping offers a middle ground, ensuring that core styles remain
                protected while allowing developers the freedom to apply contextual styles as needed.
            </p>
            <p><strong>Note:</strong>@scope adds a new criterion to the CSS cascade: scoping proximity.
                This states that when two scopes have conflicting styles, the style that has the smallest number
                of hops up the DOM tree hierarchy to the scope root is applied.
            </p>
        </section>
    );
};

export const scopeAnnotationDocumentation= {
    name: "@scope CSS annotations",
    defaultCss: "h2{\n\tcolor:#00CED1\n}\n\n/* Example 1: Scoping inside scope-content */\n@scope (.scope-content){\n\th2{\n\t\tcolor:#000000\n\t}\n}\n\n/*Example 2: Scoping in a document up to a point (Donut scoping)\n@scope (.scope-content) to (.scope-innards){\n\th2{\n\t\tcolor:#000000\n\t}\n}*/",
    defaultHtml: "<section>\n\t<h2>This is h2</h2>\n\t<div class=\"scope-content\">\n\t\t<h2>This is h2</h2>\n\t\t<div class=\"scope-innards\"><h2>This is h2</h2></div>\n\n\t</div>\n</section>",
    documentation: <CSSNewScopingDoc/>
}