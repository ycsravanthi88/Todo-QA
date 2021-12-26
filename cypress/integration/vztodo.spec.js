import React from "react";

<reference types="cypress" />;

describe("Verizon 5G Labs - Todo App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays three items by default", () => {
    cy.get(".todo").should("have.length", 3);
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

  it("can add a new todo item with labels", () => {
    const newTodo = "Wash car";
    cy.get("[data-testid=new-todo-input]").type(`${newTodo}`);

    cy.get(".form-labels-unchecked").first().click();
    cy.get(".form-labels-unchecked").first().click();

    cy.get("[data-testid=add-todo-button]").click();

    cy.get(".todo-label")
      .should("have.length", 4)
      .last()
      .should("have.text", newTodo);
  });
});
