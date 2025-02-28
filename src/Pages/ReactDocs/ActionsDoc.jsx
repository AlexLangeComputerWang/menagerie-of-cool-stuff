import React from 'react';
import UseTransitionDoc from "./UseTransitionDoc.jsx";

const ActionsDoc = () => {
    return (
        <div>
            <h2>Actions</h2>
            <p>Actions
                A common use case in React apps is to perform a data mutation and then update state in response. For example, when a user submits a form to change their name, you will make an API request, and then handle the response. In the past, you would need to handle pending states, errors, optimistic updates, and sequential requests manually.
            </p>
            <br/>
            <p>React 19 has support for using async functions in transitions to handle pending states, errors, forms, and optimistic updates automatically.</p>
            <UseTransitionDoc/>
        </div>
    );
};

export default ActionsDoc;