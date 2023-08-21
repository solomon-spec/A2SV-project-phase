import Navbar from "../Navbar";
import { render, screen } from "@testing-library/react";

test("Navbar component renders the title", () => {
  render(<Navbar />);
  const titleElement = screen.getByText("Title");
  expect(titleElement).toBeInTheDocument();
});