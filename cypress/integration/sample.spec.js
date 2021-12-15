import React from "react";

<reference types="cypress" />;

describe("Verizon 5G Labs - Todo App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays three items by default", () => {
    cy.get("li.todo").should("have.length", 3);
    cy.get(".todo-label").first().should("have.text", "Eat");
    cy.get(".todo-label").last().should("have.text", "Repeat");
  });

  it("can add new todo items", () => {
    const newTodo = "Mow the lawn";
    cy.get("[data-testid=new-todo-input]").type(`${newTodo}{enter}`);
    cy.get(".todo-label")
      .should("have.length", 4)
      .last()
      .should("have.text", newTodo);
  });
});
