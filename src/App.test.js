import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  debug,
} from "@testing-library/react";
import App from "./App";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

describe("Todo App - Smoke Test", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App tasks={DATA} />, div);
  });
});

describe("Todo App", () => {
  // render the App component before each test
  beforeEach(() => {
    render(<App tasks={DATA} />);
  });

  it("should allow user to create a new todo task", async () => {
    // render(<App tasks={DATA} />);
    const todoInput = screen.getByTestId("new-todo-input");
    const addTodoButton = screen.getByTestId("add-todo-button");

    fireEvent.change(todoInput, { target: { value: "Buy milk" } });
    fireEvent.click(addTodoButton);

    await waitFor(() => {
      expect(screen.getByLabelText("Buy milk")).toBeVisible();
    });
  });

  it("should display error message if user tries to add an empty string as a task", async () => {
    const addTodoButton = screen.getByTestId("add-todo-button");
    fireEvent.click(addTodoButton);

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toBeVisible();
    });
  });

  it("should allow users to mark a task as complete", async () => {
    const sleepCheckbox = screen.getByRole("checkbox", { name: "Sleep" });
    expect(sleepCheckbox).not.toBeChecked(); // confirm that it is incomplete

    const completedFilter = screen.getByRole("button", { name: /Completed/i });
    fireEvent.click(sleepCheckbox);
    fireEvent.click(completedFilter);
    await waitFor(() => {
      expect(screen.getByLabelText("Sleep")).toBeVisible();
    });
  });
});
