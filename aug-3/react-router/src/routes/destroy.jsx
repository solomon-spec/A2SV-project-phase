import { redirect } from "react-router-dom";
import { deleteContact } from "../contact";


// Delete a contact and redirect to the root route
export async function action({ params }) {
    await deleteContact(params.contactId);
    return redirect("/");
}