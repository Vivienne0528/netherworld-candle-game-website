import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App Component", () => {
  it("renders a heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 1 });

    // 使用断言，这样 ESLint 就不会报错
    expect(heading).toBeInTheDocument();
  });
});
