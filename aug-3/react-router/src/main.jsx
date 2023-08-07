/* This code sets up a client-side routing system using the 
  React framework and the react-router-dom library.
 It defines different routes for a web application and 
 associates React components with each route.
 The application has multiple routes for managing contacts, 
 including viewing, editing, and deleting contacts. */


// Import necessary modules and components from React 
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Import necessary modules components from files
import ErrorPage from "./error-page";
import { Contact, loader as contactLoader } from "./routes/contact";
import { EditContact, action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";
import Home from './routes/home'
import "./index.css";
document.title = "React Router Contacts";
// Create a router instance using createBrowserRouter and define routes for the application.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Render the Root component when the path is "/"
    errorElement: <ErrorPage />, // Render the ErrorPage component on route errors
    loader: rootLoader, // Use the rootLoader function to load data for this route
    action: rootAction, // Perform an action when this route is activated


    children: [
      {
        index: true, // This route is active when the index route is active
        element: <Home />, // Render the Home component when this route is active

      },
      {
        path: "contacts/:contactId", // Dynamic path parameter for viewing a specific contact
        element: <Contact />, // Render the Contact component for viewing a contact
        loader: contactLoader, // Load data specific to the contact being viewed
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader, // Load data for the contact being edited
        action: editAction, // Perform an action when editing is initiated
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction, // Perform the destroyAction when this route is activated
      }
    ]

  },

]);


// Render the RouterProvider component to the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);