{{#template name="react-step03"}}

# Storing tasks in a collection

{{> step03CollectionsIntro tutorialName="simple-todos-react"}}

### Using data from a collection inside a React component

To use data from a Meteor collection inside a React component, we can use an Atmosphere package `react-meteor-data` which allows us to create a "data container" to feed Meteor's reactive data into React's component hierarchy.

```bash
meteor add react-meteor-data
```

To use `react-meteor-data`, we need to wrap our component in a *container* using the `withTracker` Higher Order Component:

{{> DiffBox step="3.4" tutorialName="simple-todos-react"}}

The wrapped `App` component fetches tasks from the `Tasks` collection and supplies them to the underlying `App` component it wraps as the `tasks` prop. It does this in a reactive way, so that when the contents of the database change, the `App` re-renders, as we'll soon see!

When you make these changes to the code, you'll notice that the tasks that used to be in the todo list have disappeared. That's because our database is currently empty &mdash; we need to insert some tasks!

{{> step03InsertingTasksFromConsole}}

{{/template}}
