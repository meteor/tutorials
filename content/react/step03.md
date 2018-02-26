---
title: 3. Collections
---

# Storing tasks in a collection

<!-- md shared/explanations/collections-intro.md -->

### Using data from a collection inside a React component

To use data from a Meteor collection inside a React component, we can use an Atmosphere package `react-meteor-data` which allows us to create a "data container" to feed Meteor's reactive data into React's component hierarchy.

```bash
meteor add react-meteor-data
```

To use `react-meteor-data`, we need to wrap our component in a *container* using the `withTracker` Higher Order Component:

**3.1 Modify App component to get tasks from collection (`imports/ui/App.js`)**
```js
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.js';

// App component - represents the whole app
class App extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
})(App);
```

The wrapped `App` component fetches tasks from the `Tasks` collection and supplies them to the underlying `App` component it wraps as the `tasks` prop. It does this in a reactive way, so that when the contents of the database change, the `App` re-renders, as we'll soon see!

When you make these changes to the code, you'll notice that the tasks that used to be in the todo list have disappeared. That's because our database is currently empty &mdash; we need to insert some tasks!

<!-- md shared/explanations/inserting-tasks-from-console.md -->
