import React from 'react';
import Navbar from '../navbar';
import { getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom';


test('renders navbar', () => {
  // render the navbar component
  const { getByText } = render(<Navbar />);
  // get the logo element
  const logoElement = getByText(/Logo/);
  // check if the logo element is in the document
  expect(logoElement).toBeInTheDocument();

});



// test('renders blog card', () => {
//   const { getByText } = render(<BlogCard blog={ ...blogData } />);
//   const titleElement = getByText(/Blog Card/)
//   expect(titleElement).toBeInTheDocument();
// });
