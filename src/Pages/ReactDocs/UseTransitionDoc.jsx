import React, {useState, useTransition} from 'react';
import {CodeEditor} from "../../Components/CodeEditor.jsx";

const UseTransitionDoc = () => {
    return (
        <div>
            <h3>UseTransition</h3>
            <p>For example, you can use useTransition to handle the pending state for you:</p>
            <CodeEditor code={codeAsString} setCode={()=>{}} disabled language={"javascript"}/>
            <UpdateName/>
            <p>The async transition will immediately set the isPending state to true,
                make the async request(s), and switch isPending to false after any transitions.
                This allows you to keep the current UI responsive and interactive
                while the data is changing.
            </p>
        </div>
    );
};

export default UseTransitionDoc;


function UpdateName({}) {
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const [newName, setNewName] = useState(null);
    const [isPending, startTransition] = useTransition();

    const updateName = (name) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                //resolve({error:true,response:"Error,blah."}); // Simulating an error response
                resolve({error:false,response:"New Name: " + name}); // Simulating a success response.
            }, 3000);
        });
    };
    const handleSubmit = () => {
        startTransition(async () => {
            const obj = await updateName(name);
            if (obj.error) {
                setError(obj.response);
                return;
            }else{
                //Do some other logic.
                setNewName(obj.response)
            }
        })
    };

    return (
        <div>
            <input value={name} onChange={(event) => setName(event.target.value)} />
            <button onClick={handleSubmit} disabled={isPending}>
                Update
            </button>
            {error && <p>{error}</p>}
            {newName && <p>{newName}</p>}
        </div>
    );
}


const codeAsString = `
function UpdateName({}) {
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const [newName, setNewName] = useState(null);
    const [isPending, startTransition] = useTransition();

    const updateName = (name) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                //resolve({error:true,response:"Error,blah."}); // Simulating an error response
                resolve({error:false,response:"New Name: " + name}); // Simulating a success response.
            }, 3000);
        });
    };
    const handleSubmit = () => {
        startTransition(async () => {
            const obj = await updateName(name);
            if (obj.error) {
                setError(obj.response);
                return;
            }else{
                //Do some other logic.
                setNewName(obj.response)
            }
        })
    };

    return (
        <div>
            <input value={name} onChange={(event) => setName(event.target.value)} />
            <button onClick={handleSubmit} disabled={isPending}>
                Update
            </button>
            {error && <p>{error}</p>}
            {newName && <p>{newName}</p>}
        </div>
    );
}`