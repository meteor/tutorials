{{#template name="react-step08"}}

# Storing temporary UI data in component state

In this step, we'll add a client-side data filtering feature to our app, so that users can check a box to only see incomplete tasks. We're going to learn how to use React's component state to store temporary data that is only used on the client.

First, we need to add a checkbox to our `App` component:

```html
<!-- add the checkbox to <header> right below the <h1> -->
<label className="hide-completed">
  <input
    type="checkbox"
    readOnly={true}
    checked={this.state.hideCompleted}
    onClick={this.toggleHideCompleted} />
  Hide Completed Tasks
</label>
```

You can see that it reads from `this.state.hideCompleted`. React components have a special field called `state` where you can store encapsulated component data. We can update `this.state` from an event handler by calling `this.setState`, which will update the state property asynchronously and then cause the component to re-render:

```js
// Add this method to the App component, right above render()
toggleHideCompleted() {
  this.setState({
    hideCompleted: ! this.state.hideCompleted
  });
},
```

Now, we need to update `getMeteorData` to filter out completed tasks when `this.state.hideCompleted` is true:

```js
// Replace getMeteorData on the App component
getMeteorData() {
  let query = {};

  if (this.state.hideCompleted) {
    // If hide completed is checked, filter tasks
    query = {checked: {$ne: true}};
  }

  return {
    tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch()
  };
}
```

Now if you check the box, the task list will only show tasks that haven't been completed.

### One more feature: Showing a count of incomplete tasks

Now that we have written a query that filters out completed tasks, we can use the same query to display a count of the tasks that haven't been checked off. To do this we need to return a count from `getMeteorData` and add a line to our `render` method.

```js
// Replace return statement in getMeteorData to also return incompleteCount
return {
  tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch(),
  incompleteCount: Tasks.find({checked: {$ne: true}}).count()
}
```

```html
<!-- display the count at the end of the <h1> tag -->
<h1>Todo List ({this.data.incompleteCount})</h1>
```

{{/template}}
