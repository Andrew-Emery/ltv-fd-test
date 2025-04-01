# Task 5 - # Fix and pass tests

## Instructions

The `Task5` component is designed to display members grouped by their membership
status (`Gold`, `Silver`, `Bronze`, `Non-Members`). However, there are issues
preventing it from functioning as intended. The objective is to resolve these
issues and ensure the implementation meets expectations and passes the associated
tests.

## Complete the Task

- Dynamically display members' details in the `Member` component.
- Group members accurately in their respective sections based on their `membership`.
- Pass all associated tests by adhering to expected behaviors.

___
Run this command at the terminal to see passing test results

```
npm run task5
```

## Implementation - 

There was a lot of groundwork already done on this one, we had failing tests to practice some TDD. Just applied a filter before we mapped over the group of members to only grab the members of that membership group. Then reran the tests to make sure they passed.