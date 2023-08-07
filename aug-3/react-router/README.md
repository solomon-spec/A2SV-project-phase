
# React Router Contacts App

A simple Contacts application built using React and React Router with Vite.

## Features

- View a list of contacts.
- Create new contacts.
- Edit contact details.
- Delete contacts.
- Search for contacts.

In this Contacts application built using React and React Router with Vite, the following technologies and libraries were used:

1. **React**: A popular JavaScript library for building user interfaces.
   
2. **React Router**: A library for adding routing and navigation to React applications.

3. **Vite**: A build tool that offers fast development server and optimized production builds.

4. **localforage**: A library for asynchronous storage, including local storage and IndexedDB.

5. **match-sorter**: A library for sorting and filtering lists based on user input.

6. **ES6 and JavaScript**: The app is written using the ECMAScript 6 (ES6) syntax and features, along with standard JavaScript.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-router-contacts-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd react-router-contacts-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start the development server and open the app in your default browser.

5. **Open your browser and visit [http://localhost:5173](http://localhost:5173)**
## Folder Structure:

The project's folder structure is organized as follows:

- `src/`: Contains the main source code for the application.
  - `contact.js`: Provides functions for managing contact data and simulating network delay.
  - `index.js`: The entry point of the application. Defines the routing and layout of the application.
  - `Root.js`: Renders the main layout of the application.
  - `error-page.js`: Displays an error page in case of routing errors.
  - `routes/`: Contains components for different routes (e.g., Contact, EditContact).
- `index.html`: The main HTML template for the application.


## Usage

- Click on a contact's name in the sidebar to view its details.
- Use the "New" button to create a new contact. It will redirect you to the edit page for the new contact.
- Edit contact details by clicking on a contact and then clicking "Save" after making changes.
- Delete a contact by clicking the "Delete" button on the contact's detail page.



## License

This project is licensed under the [MIT License](LICENSE).


