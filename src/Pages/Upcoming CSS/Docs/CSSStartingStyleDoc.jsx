import React from 'react';

export const StartingStyleDoc = () => {
    return (
        <section>
            <h3>Understanding @starting-style in CSS</h3>
            <p>
                The <code>@starting-style</code> CSS at-rule allows developers to specify the initial styles of an element
                before an animation begins. This ensures smooth transitions and prevents layout shifts caused by
                implicit style changes.
            </p>

            <h2>Why Use @starting-style?</h2>
            <ul>
                <li><strong>Prevents Layout Shifts:</strong> Ensures a defined starting point for animations, reducing visual jumps.</li>
                <li><strong>Optimized Performance:</strong> Helps the browser efficiently process animations by defining the first frame explicitly.</li>
                <li><strong>Cleaner Code:</strong> Reduces the need for JavaScript-based workarounds to set initial styles.</li>
            </ul>

            <h2>Browser Support</h2>
            <p>
                As of now, <code>@starting-style</code> is a relatively new feature and may not yet be fully supported in all browsers.
                Developers should check compatibility tables before relying on it for production use.
            </p>
        </section>
    );
}


export const startingStyleDoc= {
    name: "@starting-style",

    defaultCss:"[popover]:popover-open {\n" +
        "  opacity: 1;\n" +
        "  transform: scaleX(1);\n" +
        "}\n" +
        "@starting-style {\n" +
        "  [popover]:popover-open {\n" +
        "    opacity: 0;\n" +
        "    transform: scaleX(0);\n" +
        "  }\n" +
        "}\n" +
        "\n" +
        ".information {\n" +
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
        "}\n" +
        "\n" +
        ".information:hover {\n" +
        "  background: #0088ff;\n" +
        "}\n" +
        "\n" +
        ".label-container {\n" +
        "  display: flex;\n" +
        "  gap: 0.25rem;\n" +
        "}\n" +
        "\n" +
        "form {\n" +
        "  margin-top: 6vh;\n" +
        "}\n" +
        "\n" +
        "body {\n" +
        "  height: 150vh;\n" +
        "  zoom: 2;\n" +
        "}\n" +
        "\n" +
        "[popover] {\n" +
        "  font-size: 1.2rem;\n" +
        "  padding: 10px;\n" +
        "  /* Final state of the exit animation */\n" +
        "  opacity: 0;\n" +
        "  transform: scaleX(0);\n" +
        "  bottom:anchor(top);\n" +
        "  left:anchor(center);\n" +
        "  transition: all 0.2s allow-discrete;\n" +
        "}",


    defaultHtml: "<form>\n" +
        "  <div>\n" +
        "    <div class=\"label-container\">\n" +
        "      <label for=\"confusing\"> Animated Popover</label>\n" +
        "      <button id='infobtn' popovertarget='my-popover' type=\"button\" class=\"information\">i</button>\n" +
        "      <div id='my-popover' popover anchor='infobtn'>Extra</div>\n" +
        "    </div>\n" +
        "    <input type=\"text\" id=\"confusing\"/>\n" +
        "  </div>\n" +
        "</form>",



    documentation: <StartingStyleDoc/>
}