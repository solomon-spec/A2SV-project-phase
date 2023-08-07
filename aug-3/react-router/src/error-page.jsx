
/* Displays an error message when a route error occurs.
It utilizes the "useRouteError" hook from the "react-router-dom" library.*/

import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    // Capture the route error using the useRouteError hook.
    const error = useRouteError();

    // Log the error to the console for debugging purposes.
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {/* Display the status text or error message from the captured error. */}
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
