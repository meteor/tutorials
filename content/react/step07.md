---
title: 7. Temporary UI state
---

# Storing temporary UI data in component state

In this step, we'll add a client-side data filtering feature to our app, so that users can check a box to only see incomplete tasks. We're going to learn how to use React's component state to store temporary information that is only used on the client.

First, we need to add a checkbox to our `App` component:

**7.1 Add hide completed checkbox to App component (`imports/ui/App.js`)**
```html
...
<header>
  <h1>Todo List</h1>

  <label className="hide-completed">
    <input
      type="checkbox"
      readOnly
      checked={this.state.hideCompleted}
      onClick={this.toggleHideCompleted.bind(this)}
    />
    Hide Completed Tasks
  </label>

  <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
    <input
      type="text"
      ref="textInput"
      placeholder="Type to add new tasks"
    />
  </form>
...  
```

You can see that it reads from `this.state.hideCompleted`. React components have a special field called `state` where you can store encapsulated component data. We'll need to initialize the value of `this.state.hideCompleted` in the component's constructor:

**7.2 Add initial state to App component (`imports/ui/App.js`)**
```js
...
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    ...
  }
  ...
}
...
```

We can update `this.state` from an event handler by calling `this.setState`, which will update the state property asynchronously and then cause the component to re-render:

**7.3 Add toggleHideCompleted handler to App (`imports/ui/App.js`)**
```js
    ...
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
  ...
```

Now, we need to update our `renderTasks` function to filter out completed tasks when `this.state.hideCompleted` is true:

**7.4 Filter tasks in renderTasks (`imports/ui/App.js`)**
```js
    ...
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
  ...
```

Now if you check the box, the task list will only show tasks that haven't been completed.

### One more feature: Showing a count of incomplete tasks

Now that we have written a query that filters out completed tasks, we can use the same query to display a count of the tasks that haven't been checked off. To do this we need to fetch a count in our data container and add a line to our `render` method. Since we already have the data in the client-side collection, adding this extra count doesn't involve asking the server for anything.

**7.5 Update data container to return incompleteCount (`imports/ui/App.js`)**
```js
...

export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
  };
})(App);
```

**7.6 Display incompleteCount in the header (`imports/ui/App.js`)**
```js
    ...
    return (
      <div className="container">
        <header>
          <h1>Todo List ({this.props.incompleteCount})</h1>

          <label className="hide-completed">
            ...
    )
    ...
```
