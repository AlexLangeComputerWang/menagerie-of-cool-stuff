import React from "react";
import {TemporalOverviewDoc} from "./Docs/TemporalOverviewDoc.jsx";

export const temporalDocumentation = () => {
    return [
        {name:"Temporal API",
        htmlToRender:<TemporalOverviewDoc/>,
        codeSnippetString:"//Simple Day implementation\nconst newDate = Temporal.PlainDate.from({year:2025,month:2,day:13});\nconsole.log(newDate.toString());\n\n" +
            "//Specify dates without a year\nconst birthday = Temporal.PlainMonthDay.from({month:11,day:14});\nconsole.log(birthday.toString());\n\n" +
            "" +
            "// The current date in the system's time zone\nconst dateTime = Temporal.Now.zonedDateTimeISO();\nconsole.log(`System Time Zone: ${dateTime.toString()}`);\n\n// The current date in other time zones!\nconst dateTimeInNewYork = Temporal.Now.zonedDateTimeISO(\"America/New_York\");\nconsole.log(`New York: ${dateTimeInNewYork.toString()}`);\n\nconst dateTimeInLondon = Temporal.Now.zonedDateTimeISO(\"Europe/London\");\nconsole.log(`London: ${dateTimeInLondon.toString()}`);\n\nconst dateTimeInTokyo = Temporal.Now.zonedDateTimeISO(\"Asia/Tokyo\");\nconsole.log(`Tokyo: ${dateTimeInTokyo.toString()}`);\n\n// List all available time zones\nconsole.log(\"All possible time zones:\");\nconst timeZones = Intl.supportedValuesOf(\"timeZone\");\ntimeZones.forEach((timeZone) => {\n    console.log(`${timeZone}\\n`);\n});\n\n"
        },
    ]
}