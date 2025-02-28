import React from 'react';
import { useOptimistic, useState, useRef } from "react";
import {CodeEditor} from "../../Components/CodeEditor.jsx";

export const UseOptimisticDoc = () => {
    return (
        <div>
            <h2>useOptimistic</h2>
            <p>The useOptimistic Hook provides a way to optimistically update the user interface before a background operation, like a network request, completes. In the context of forms, this technique helps to make apps feel more responsive. When a user submits a form, instead of waiting for the server’s response to reflect the changes, the interface is immediately updated with the expected outcome.

</p><br/><p>For example, when a user types a message into the form and hits the “Send” button, the useOptimistic Hook allows the message to immediately appear in the list with a “Sending…” label, even before the message is actually sent to a server. This “optimistic” approach gives the impression of speed and responsiveness. The form then attempts to truly send the message in the background. Once the server confirms the message has been received, the “Sending…” label is removed.</p>
        <h4>Demo Component:</h4>
            <CodeEditor code={codeAsString} setCode={()=>{}} disabled language={"javascript"}/>

            <UseOptimisticDemo />
        </div>
    );
};






export const UseOptimisticDemo=()=> {
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 }
  ]);
  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get("message"));
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }
  return <Thread messages={messages} sendMessage={sendMessage} />;
}

  

const Thread = ({ messages, sendMessage })=> {
    const formRef = useRef();
    async function formAction(formData) {
      addOptimisticMessage(formData.get("message"));
      formRef.current.reset();
      await sendMessage(formData);
    }
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
      messages,
      (state, newMessage) => [
        ...state,
        {
          text: newMessage,
          sending: true
        }
      ]
    );
  
    return (
      <>
        {optimisticMessages.map((message, index) => (
          <div key={index}>
            {message.text}
            {!!message.sending && <small> (Sending...)</small>}
          </div>
        ))}
        <form action={formAction} ref={formRef}>
          <input type="text" name="message" placeholder="Hello!" />
          <button type="submit">Send</button>
        </form>
      </>
    );
}

async function deliverMessage(message) {
    await new Promise((res) => setTimeout(res, 1000));
    return message;
}


const codeAsString = `export const UseOptimisticDemo=()=> {
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 }
  ]);
  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get("message"));
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }
  return <Thread messages={messages} sendMessage={sendMessage} />;
}

  

const Thread = ({ messages, sendMessage })=> {
    const formRef = useRef();
    async function formAction(formData) {
      addOptimisticMessage(formData.get("message"));
      formRef.current.reset();
      await sendMessage(formData);
    }
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
      messages,
      (state, newMessage) => [
        ...state,
        {
          text: newMessage,
          sending: true
        }
      ]
    );
  
    return (
      <>
        {optimisticMessages.map((message, index) => (
          <div key={index}>
            {message.text}
            {!!message.sending && <small> (Sending...)</small>}
          </div>
        ))}
        <form action={formAction} ref={formRef}>
          <input type="text" name="message" placeholder="Hello!" />
          <button type="submit">Send</button>
        </form>
      </>
    );
}

async function deliverMessage(message) {
    await new Promise((res) => setTimeout(res, 1000));
    return message;
}`