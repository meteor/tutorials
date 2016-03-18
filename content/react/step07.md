{{#template name="react-step07"}}

# Storing temporary UI data in component state

In this step, we'll add a client-side data filtering feature to our app, so that users can check a box to only see incomplete tasks. We're going to learn how to use React's component state to store temporary information that is only used on the client.

First, we need to add a checkbox to our `App` component:

{{> DiffBox step="7.1" tutorialName="simple-todos-react"}}

You can see that it reads from `this.state.hideCompleted`. React components have a special field called `state` where you can store encapsulated component data. We'll need to initialize the value of `this.state.hideCompleted` in the component's constructor:

{{> DiffBox step="7.2" tutorialName="simple-todos-react"}}

We can update `this.state` from an event handler by calling `this.setState`, which will update the state property asynchronously and then cause the component to re-render:

{{> DiffBox step="7.3" tutorialName="simple-todos-react"}}

Now, we need to update our `renderTasks` function to filter out completed tasks when `this.state.hideCompleted` is true:

{{> DiffBox step="7.4" tutorialName="simple-todos-react"}}

Now if you check the box, the task list will only show tasks that haven't been completed.

### One more feature: Showing a count of incomplete tasks

Now that we have written a query that filters out completed tasks, we can use the same query to display a count of the tasks that haven't been checked off. To do this we need to fetch a count in our data container and add a line to our `render` method. Since we already have the data in the client-side Minimongo collection, adding this extra count doesn't involve asking the server for anything.

{{> DiffBox step="7.5" tutorialName="simple-todos-react"}}

{{> DiffBox step="7.6" tutorialName="simple-todos-react"}}

{{/template}}
