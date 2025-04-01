# Task 3 - Form

## Instructions

Your task is to complete a React component that allows a user to submit unique names through a form.
You will implement both styling and functionality, with proper form validation and user feedback.
Additionally, you will write tests to ensure the component behaves as expected. You will find a basic
setup in the `__test__` folder.

### Requirements

- **Form Submission**:
    - Implement an input field and submit functionality using React. The form must allow users to input and submit a
      name.
    - Validate that the name:
        - Is at least **3 characters long**.
        - Is not a **duplicate** (case-insensitive).

    - After successful validation, add the name to the **list of submitted names** displayed below the form.


- **Error Handling**:
    - If a name is invalid (shorter than 3 characters or a duplicate), display a **clear and user-friendly error message
      ** near the input field. Errors should disappear when the issue is resolved.


- ## Tests

Run this script to check whether your tests are correct

```
npm run task3
```

## Implementation - 

Using react state to control components, setup with the intention of expanding the form later on. Error handing was a little tricky here with ensuring that the correct errors persisted and were handled when resolved. Quite fun doing this task manually where I would usually use a library such as formik - https://formik.org/docs/overview - that handles values, validation, form feedback and submission.