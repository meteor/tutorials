{{#template name="react-step03"}}

# Storing tasks in a collection

{{> step03CollectionsIntro}}

Let's update our code to get our tasks from a collection instead of a static array. A summary of the changes, all are inside `simple-todos-react.jsx`:

1. Define a collection at the top of the file
2. Add a `mixins:` property to the `App` component definition
3. Add a `getMeteorData` method to the `App` component
4. Modify `renderTasks` to get task data from `this.data.tasks`

```js
// simple-todos-react.jsx

// Define a collection at the top of the file to hold our tasks
Tasks = new Mongo.Collection("tasks");

// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      tasks: Tasks.find({}).fetch()
    }
  },

  renderTasks() {
    // Get tasks from this.data.tasks
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  // ... rest of the methods are unchanged
```

When you make these changes to the code, you'll notice that the tasks that used to be in the todo list have disappeared. That's because our database is currently empty &mdash; we need to insert some tasks!

{{> step03InsertingTasksFromConsole}}

{{/template}}
