import React from 'react';

export const CSSCustomSelectDoc = () => {
    return (
        <section>
            <header>
                <h3>Enhancing Dropdowns with Custom CSS</h3>
                <p>
                    <strong>CSS Custom Select </strong>
                    is a powerful approach to customizing the appearance and functionality of the standard HTML <code>select</code> element. By utilizing advanced CSS techniques, this method allows developers to create visually appealing and interactive dropdowns that go beyond the limitations of default browser styles

                </p>
            </header>

            <a href={"https://developer.chrome.com/blog/rfc-customizable-select#style_the_selected_option"}>Documentation</a>
            <ul>
                <li>
                    <strong>Custom Styling:</strong> This approach provides full control over the appearance of dropdowns, from adjusting font sizes and padding to modifying borders, shadows, and background colors. You can completely reimagine the look of a dropdown to match the design of your application.
                </li>
                <li>
                    <strong>Enhanced User Experience:</strong> With the use of emojis and custom groupings, users can select options in a more intuitive and visually engaging way. Grouping options by emotion (e.g., Happy, Sad, Angry) helps in organizing content and providing context for the choices.
                </li>
                <li>
                    <strong>Custom Button & Interaction:</strong> Instead of using the default select box, a custom button is used to display the selected option. This creates a more interactive and flexible UI element, which can be easily integrated into a modern design system.
                </li>
                <li>
                    <strong>Advanced Features:</strong> This technique makes use of advanced and experimental CSS properties like <code>appearance</code>, <code>::picker(select)</code>, and <code>selectedcontent</code> - formerly <code>selectedoption</code> ( I spent HOURS trying to figure out why this wasn't working) to provide rich customization options. Although experimental, it brings new possibilities to the table for designers looking to push the boundaries of standard dropdowns.
                </li>
            </ul>
            <p>
                This method is ideal for applications where a higher degree of customization is required for dropdowns. It helps elevate the user interface, making the dropdown more visually compelling and contextually relevant, all while maintaining accessibility and functionality.
            </p>
            <ul>
               <li>
                    <strong>If a browser doesn't support this, there is a fallback option.</strong>
               </li>
                <li>
                    <strong>This is still in Stage 2 - the specs are done for the project, and browsers can use it. </strong>
                </li>
                <li>
                    <strong>To test it, enable 'Experimental Web Platform Features' in the chrome://flags settings of chrome canary version 130 or greater.</strong>
                </li>
            </ul>
        </section>
);
};


export const customSelectDoc = {
    name:"Customizable Dropdowns",
        defaultCss:"select,\n::picker(select) {\n  appearance: base-select;\n}\n\nselectedcontent {\n  font-size: 50px;\n  span {\n    display: none;\n  }\n}\n\n::picker(select) {\n  width: 500px;\n  padding: 0;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n}\n\n/* hide checkmark */\noption::before {\n  display: none;\n}\n\noption {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  &:checked {\n    border-color: black;\n  }\n}\n\nbutton {\n  appearance: none;\n  background: none;\n  border: 1px solid white;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.emotion-groups {\n  padding: 1rem;\n}\n\n.emotion-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  h3 {\n    width: 100%;\n    margin: 0;\n  }\n}\n\n::picker(select) {\n  max-height: 80dvh;\n  padding: 0.5rem;\n  top: 0;\n  position: absolute;\n} selectedcontent {\n   & figure {\n    background-image: linear-gradient(0deg, #fff 0%, #000 0% 20%, #fff 0% 40%, #000 0% 60%, #fff 0% 80%, #000 0% 100%);\n    height: 1rem;\n    margin: 0;\n  }\n} \n\nbody {\n  padding: 50px;\n  place-content: start;\n  min-height: 100dvh;\n  text-align: center;\n  overflow: hidden;\n  display: grid;\n  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);\n  & > * {\n    margin-block: auto;\n  }\n}\n\nselect[multiple] {\n  height: 300px;\n}",
    defaultHtml: "<select class=\"emoji-select\">\n      <button><selectedcontent></selectedcontent></button>\n      <div class=\"emotion-groups\">\n        <div class=\"emotion-group\">\n          <h3>Happy</h3>\n          <option value=\"🥳\">🥳 <span>Partying</span></option>\n          <option value=\"🎉\">🎉 <span>Party Popper</span></option>\n          <option value=\"😊\">😊 <span>Smiling</span></option>\n          <option value=\"😂\">😂 <span>Tears of Joy</span></option>\n          <option value=\"😍\">😍 <span>Heart Eyes</span></option>\n          <option value=\"😎\">😎 <span>Cool</span></option>\n        </div>\n\n        <div class=\"emotion-group\">\n          <h3>Sad</h3>\n          <option value=\"😢\">😢 <span>Crying</span></option>\n          <option value=\"😞\">😞 <span>Disappointed</span></option>\n          <option value=\"😔\">😔 <span>Pensive</span></option>\n          <option value=\"😕\">😕 <span>Confused</span></option>\n        </div>\n\n        <div class=\"emotion-group\">\n          <h3>Angry</h3>\n          <option value=\"😡\">😡 <span>Super Mad</span></option>\n          <option value=\"😠\">😠 <span>Angry</span></option>\n        </div>\n      </div>\n    </select>",
    documentation: <CSSCustomSelectDoc/>
}
