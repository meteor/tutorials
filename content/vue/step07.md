{{#template name="vue-step07"}}

# Storing temporary UI data in Vue components data field

In this step, we'll add a client-side data filtering feature to our app, so that users can check a box to only see incomplete tasks. We're going to learn how to use Vue's component state to store temporary information that is only used on the client.

First, we need to add a checkbox to our `App` component:

{{> DiffBox step="7.1" tutorialName="simple-todos-vue"}}

You can see that it reads from `this.hideCompleted`. We'll need to initialize the value of `this.hideCompleted` in the component's data object:

{{> DiffBox step="7.2" tutorialName="simple-todos-vue"}}

We can update `this.hideCompleted` from an event handler directly, which will then cause the component to re-render:

{{> DiffBox step="7.3" tutorialName="simple-todos-vue"}}

Now, we need to update the list of tasks to filter out completed tasks when `this.hideCompleted` is true:

{{> DiffBox step="7.4" tutorialName="simple-todos-vue"}}

Now if you check the box, the task list will only show tasks that haven't been completed.

### One more feature: Showing a count of incomplete tasks

Now that we have written a query that filters out completed tasks, we can use the same query to display a count of the tasks that haven't been checked off. To do this we need to fetch a count in the meteor object of the Vue instace. Since we already have the data in the client-side collection, adding this extra count doesn't involve asking the server for anything.

{{> DiffBox step="7.5" tutorialName="simple-todos-vue"}}

{{> DiffBox step="7.6" tutorialName="simple-todos-vue"}}

{{/template}}
