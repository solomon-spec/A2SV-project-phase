/*The main layout component for the Contacts application. 
It displays a sidebar with navigation links and content for contact details.
 This component uses hooks and routing features from 
 'react-router-dom' for navigation and data loading.
*/

import React from 'react';
import { Outlet, Link, useLoaderData, Form, redirect, NavLink, useNavigation } from 'react-router-dom';
import { getContacts, createContact } from "../contact";

// Loader function to load contacts data for the sidebar navigation.
export async function loader() {
    const contacts = await getContacts();
    return { contacts };
}

// Action function to create a new contact and redirect to its edit page.
export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

// Root Component: Main layout component for the Contacts application.
export default function Root() {
    const { contacts } = useLoaderData();
    const navigation = useNavigation();

    return (
        <>
            {/* Sidebar Section */}
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    {/* Search Form */}
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    {/* New Contact Button */}
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                {/* Navigation Section */}
                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <NavLink
                                        to={`contacts/${contact.id}`}
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? "active"
                                                : isPending
                                                    ? "pending"
                                                    : ""
                                        }
                                    >
                                        {/* Display contact name and favorite status */}
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </div>

            {/* Detail Section */}
            <div
                id="detail"
                className={
                    navigation.state === "loading" ? "loading" : ""
                }
            >
                <Outlet />
            </div>
        </>
    );
}
