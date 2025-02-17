import React from "react";



export const CSSAnchorDoc = () => {
    return <section>
        <h3>The HTML Popover API Combined with CSS Anchor Positioning</h3>
        <p>These technologies enhance web interactivity by allowing precise control over popover elements and their
            positioning.</p>

        <h2>Documentation Links</h2>
        <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API">Popover Documentation</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning">Anchor
                Documentation</a></li>
            <li><a href="https://www.youtube.com/watch?v=B4Y9Ed4lLAI">Walkthrough/Demo</a></li>
        </ul>

        <h2>Understanding the Popover API</h2>
        <p><strong>The HTML Popover API</strong> allows elements with the <code>popover</code> attribute to be toggled
            using a button with <code>popovertarget</code>. This enables dynamic and interactive UI elements without
            requiring JavaScript.</p>

        <h2>Understanding the Anchor API</h2>
        <p><strong>The HTML Anchor API</strong> allows elements to be anchored relative to another element using
            the <code>anchor</code> attribute. This provides greater control over positioning within the layout.</p>

        <h2>CSS Anchor Positioning</h2>
        <p>Using anchor properties in CSS, you can define how a popover element aligns relative to its base element.</p>
        <ul>
            <li>Anchors can be specified in CSS using the <code>anchor-name</code> property instead of defining them
                directly in HTML.
            </li>
            <li>The <code>@position-fallback</code> annotation allows the browser to reposition the popover if it would
                otherwise be clipped or out of view.
            </li>
        </ul>

        <h2>Browser Support</h2>
        <p>Popovers are expected to be widely supported across all major browsers soon, while Anchor features are still
            in early stages of adoption.</p>
    </section>

}


export const cssAnchorDoc = {


    name: "Anchor Positioning",


    defaultCss: ".information {\n" +
        "  all: unset;\n" +
        "  background: #00aaff;\n" +
        "  color: white;\n" +
        "  border-radius: 20px;\n" +
        "  font-size: 0.5rem;\n" +
        "  width: 0.6rem;\n" +
        "  height: 0.6rem;\n" +
        "  display: flex;\n" +
        "  justify-content: center;\n" +
        "  align-items: center;\n" +
        "  cursor: pointer;\n" +
        "}\n\n" +
        ".information:hover {\n" +
        "  background: #0088ff;\n" +
        "}\n\n" +
        ".label-container {\n" +
        "  display: flex;\n" +
        "  gap: 0.25rem;\n" +
        "}\n\n" +
        "form {\n" +
        "  margin-top: 6vh;\n" +
        "}\n\n" +
        "body {\n" +
        "  height: 150vh;\n" +
        "  zoom: 2;\n" +
        "}\n\n" +
        "[popover]{\n" +
        "inset:unset;\n" +
        "bottom:anchor(top);\n" +
        "left:anchor(center);\n" +
        "margin:.1rem\n" +
        "}\n\n"
    ,


    defaultHtml: "<form>\n" +
        "  <div>\n" +
        "    <div class=\"label-container\">\n" +
        "      <label for=\"confusing\"> Confusing Field</label>\n" +
        "      <button id='infobtn' popovertarget='my-popover' type=\"button\" class=\"information\">i</button>\n" +
        "      <div id='my-popover' popover anchor='infobtn'>Extra</div>\n" +
        "    </div>\n" +
        "    <input type=\"text\" id=\"confusing\"/>\n" +
        "  </div>\n" +
        "</form>",


    documentation: <CSSAnchorDoc/>
}