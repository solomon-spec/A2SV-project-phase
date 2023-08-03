# TODO app with typescript + react + vite + tailwind css
This documentation provides a concise guide on how to build a Todo app using TypeScript, React, Vite, and Tailwind CSS. This combination of technologies offers a modern and efficient stack for developing robust and responsive web applications.
---
## Installation and setup
1. If you have't installed   `node.js` install it on their offical website.
2. `npm create vite@latest` use `React + Typescript`
3. `npm install -D tailwindcss postcss autoprefixer`
4. `npx tailwindcss init -p`
5. In your `tailwind.config.json` add 
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
6. In your `index.css` add 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```