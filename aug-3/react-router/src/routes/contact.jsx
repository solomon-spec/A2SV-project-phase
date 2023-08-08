import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "../contact";

// Loader function to fetch contact data based on the provided "contactId" parameter.
export async function loader({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
}

// Displays detailed information about a contact.
export function Contact() {
    // Load contact data from the loader using useLoaderData hook.
    const { contact } = useLoaderData();

    return (

        <div id="contact">

            <div>
                {/* Display the contact's avatar image. */}
                <img
                    key={contact.avatar}
                    src={contact.avatar || null}
                />
            </div>

            <div>
                <h1>
                    {/* Display the contact's name or "No Name" if not available. */}
                    {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                    {/* Render the Favorite subcomponent to manage favorite status. */}
                    <Favorite contact={contact} />
                </h1>

                {/* Display the contact's Twitter handle with a link if available. */}
                {contact.twitter && (
                    <p>
                        <a
                            target="_blank"
                            href={`https://twitter.com/${contact.twitter}`}
                        >
                            {contact.twitter}
                        </a>
                    </p>
                )}

                {/* Display the contact's notes if available. */}
                {contact.notes && <p>{contact.notes}</p>}

                <div>
                    {/* Form for initiating the "edit" action on the contact. */}
                    <Form action="edit">
                        <button type="submit">Edit</button>
                    </Form>
                    {/* Form for initiating the "destroy" action on the contact. */}
                    <Form
                        method="post"
                        action="destroy"
                        onSubmit={(event) => {
                            // Prompt the user to confirm contact deletion.
                            if (
                                !confirm(
                                    "Please confirm you want to delete this record."
                                )
                            ) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

// Allows toggling the favorite status of a contact.
function Favorite({ contact }) {
    // Set initial favorite status based on contact data.
    let favorite = contact.favorite;

    return (
        <Form method="post">
            {/* Button to toggle the favorite status of the contact. */}
            <button
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label={
                    favorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                }
            >
                {/* Display a star icon for favorited and an empty star for not favorited. */}
                {favorite ? "★" : "☆"}
            </button>
        </Form>
    );
}
