/*
This module provides functions to interact with contact
data using local storage and simulates network delay for
a more realistic experience.
It uses external libraries like "localforage" 
for local storage and "match-sorter" for sorting 
and filtering contacts.

*/

import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

// Function to simulate network delay.
async function fakeNetwork(key) {
    if (!key) {
        fakeCache = {};
    }

    if (fakeCache[key]) {
        return;
    }

    fakeCache[key] = true;
    return new Promise(res => {
        setTimeout(res, Math.random() * 800);
    });
}

// Helper function to update local storage.
function set(contacts) {
    return localforage.setItem("contacts", contacts);
}

export async function getContacts(query) {
    // Simulate network delay for fetching contacts.
    await fakeNetwork(`getContacts:${query}`);

    // Retrieve contacts from local storage or initialize an empty array.
    let contacts = await localforage.getItem("contacts");
    if (!contacts) contacts = [];

    // If a query is provided, filter and sort the contacts.
    if (query) {
        contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
    }

    // Sort contacts by last name and creation date.
    return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
    // Simulate network delay for creating a contact.
    await fakeNetwork();

    // Generate a random ID for the new contact.
    let id = Math.random().toString(36).substring(2, 9);
    let contact = { id, createdAt: Date.now() };

    // Get existing contacts, add the new contact, and update local storage.
    let contacts = await getContacts();
    contacts.unshift(contact);
    await set(contacts);

    return contact;
}

export async function getContact(id) {
    // Simulate network delay for fetching a specific contact.
    await fakeNetwork(`contact:${id}`);

    // Retrieve contacts from local storage and find the specific contact.
    let contacts = await localforage.getItem("contacts");
    let contact = contacts.find(contact => contact.id === id);

    return contact ?? null;
}

export async function updateContact(id, updates) {
    // Simulate network delay for updating a contact.
    await fakeNetwork();

    // Retrieve contacts from local storage and find the contact to update.
    let contacts = await localforage.getItem("contacts");
    let contact = contacts.find(contact => contact.id === id);

    // If no contact is found, throw an error.
    if (!contact) throw new Error("No contact found for", id);

    // Apply the updates and update local storage.
    Object.assign(contact, updates);
    await set(contacts);

    return contact;
}

export async function deleteContact(id) {
    // Retrieve contacts from local storage and find the contact to delete.
    let contacts = await localforage.getItem("contacts");
    let index = contacts.findIndex(contact => contact.id === id);

    // If the contact is found, remove it from the array and update local storage.
    if (index > -1) {
        contacts.splice(index, 1);
        await set(contacts);
        return true;
    }

    return false; // Contact not found.
}
