import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  it("renders with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("shows loading state", () => {
    render(<Button loading>Test</Button>);
    expect(screen.getByText("...")).toBeInTheDocument();
  });
});
