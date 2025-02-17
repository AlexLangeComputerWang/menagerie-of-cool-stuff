import React from 'react';
import {TemporalDemoScreen} from "./TemporalDemoScreen.jsx";
import {temporalDocumentation} from "./temporalDocumentation.jsx";

export const JavascriptDocs = () =>{
    return <TemporalDemoScreen documentation ={temporalDocumentation()}/>
}