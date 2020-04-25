{{#template name="svelte-step07"}}

# Storing temporary UI data in Svelte components data field

In this step, we'll add a client-side data filtering feature to our app, so that users can check a box to only see incomplete tasks. We're going to learn how to use Svelte's component state to store temporary information that is only used on the client.

First, we need to add a checkbox to our `App` component:

{{> DiffBox step="7.1" tutorialName="simple-todos-svelte"}}

You can see that it reads from `hideCompleted`. We'll need to initialize the value of `hideCompleted` to false:

{{> DiffBox step="7.2" tutorialName="simple-todos-svelte"}}

The `hideCompleted` component propert will reactively update the contents of the `task` array and filter out tasks that have been checked if neeeded:

{{> DiffBox step="7.3" tutorialName="simple-todos-svelte"}}

Now if you check the box, the task list will only show tasks that haven't been completed.


### One more feature: Showing a count of incomplete tasks

Now that we have written a query that filters out completed tasks, we can use the same query to display a count of the tasks that haven't been checked off. Since we already have the data in the client-side collection, adding this extra count doesn't involve asking the server for anything.

{{> DiffBox step="7.4" tutorialName="simple-todos-svelte"}}

{{> DiffBox step="7.5" tutorialName="simple-todos-svelte"}}

{{/template}}
