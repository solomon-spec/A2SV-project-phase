import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateContact } from "../contact";

// Action function for handling contact updates.
export async function action({ request, params }) {

    // Parse form data from the request.
    const formData = await request.formData();

    // Convert form data to key-value pairs.
    const updates = Object.fromEntries(formData);

    // Update the contact using the "updateContact" function.
    await updateContact(params.contactId, updates);

    // Redirect to the contact's detail page after updating.
    return redirect(`/contacts/${params.contactId}`);
}

// EditContact Component: Allows editing contact details.
export function EditContact() {

    // Load contact data from the loader using useLoaderData hook.
    const { contact } = useLoaderData();

    // Get the navigate function from the useNavigate hook.
    const navigate = useNavigate();

    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Name</span>
                <input
                    placeholder="First"
                    aria-label="First name"
                    type="text"
                    name="first"
                    defaultValue={contact.first}
                />
                <input
                    placeholder="Last"
                    aria-label="Last name"
                    type="text"
                    name="last"
                    defaultValue={contact.last}
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text"
                    name="twitter"
                    placeholder="@jack"
                    defaultValue={contact.twitter}
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    placeholder="https://example.com/avatar.jpg"
                    aria-label="Avatar URL"
                    type="text"
                    name="avatar"
                    defaultValue={contact.avatar}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    name="notes"
                    defaultValue={contact.notes}
                    rows={6}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button type="button"
                    /* Navigate back to the contact's detail page. */
                    onClick={() => {
                        navigate(-1);
                    }}
                >Cancel</button>
            </p>
        </Form>
    );
}
