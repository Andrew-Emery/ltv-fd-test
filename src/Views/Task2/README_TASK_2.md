# Task 2 - Create a Button Component

## Instructions

The goal of this task is to create a **Button** component in React that allows the developer to generate buttons of
types: `Primary`, `Secondary`, `Tertiary`, and `Disabled`. The component should be reusable,
maintainable, and follow a clean structure.

### Requirements

- The Button API should be customizable using props.
- Style each button type differently for a clear visual distinction between them.

## Implementation - 

Kept it nice and simple and just used minimal button props to complete the task. It has a label, onClick func and type. Opted on using a switch to apply styling within the JS. My choice on this was to apply styles based on props at the runtime with potentially high specificity however it should be nothe that stylesheets are more performant.