{{#template name="react-step11"}}

# Filtering data with publish and subscribe

Now that we have moved all of our app's sensitive code into methods, we need to learn about the other half of Meteor's security story. Until now, we have worked assuming the entire database is present on the client, meaning if we call `Tasks.find()` we will get every task in the collection. That's not good if users of our application want to store privacy-sensitive data. We need a way of controlling which data Meteor sends to the client-side database.

Just like with `insecure` in the last step, all new Meteor apps start with the `autopublish` package. Let's remove it and see what happens:

```bash
meteor remove autopublish
```

When the app refreshes, the task list will be empty. Without the `autopublish` package, we will have to specify explicitly what the server sends to the client. The functions in Meteor that do this are `Meteor.publish` and `Meteor.subscribe`.

Let's add them now.

```js
// At the bottom of simple-todos-react.jsx
if (Meteor.isServer) {
  Meteor.publish("tasks", function () {
    return Tasks.find();
  });
}
```

```js
// At the top of the if (Meteor.isClient) { ... } block
Meteor.subscribe("tasks");
```


Once you have added this code, all of the tasks will reappear.

Calling `Meteor.publish` on the server registers a _publication_ named `"tasks"`. When `Meteor.subscribe` is called on the client with the publication name, the client _subscribes_ to all the data from that publication, which in this case is all of the tasks in the database. To truly see the power of the publish/subscribe model, let's implement a feature that allows users to mark tasks as "private" so that no other users can see them.

### Adding a button to make tasks private

Let's add another property to tasks called "private" and a button for users to mark a task as private. This button should only show up for the owner of a task. It will display the current state of the item.

First, we need to add a new method that we can call to set a task's private status:

```js
// Add a method underneath `setChecked`
setPrivate(taskId, setToPrivate) {
  var task = Tasks.findOne(taskId);

  // Make sure only the task owner can make a task private
  if (task.owner !== Meteor.userId()) {
    throw new Meteor.Error("not-authorized");
  }

  Tasks.update(taskId, { $set: { private: setToPrivate } });
}
``` 

Now, we need to pass a new property to the `Task` to decide whether we want
to show the private button; the button should show up only if the currently
logged in user owns this task:

```js
// New code to generate the tasks array at the top of the render function for
// the App component
const tasks = this.data.tasks.map((task) => {
  const showPrivateButton = task.owner === this.data.currentUser._id;
  return <Task
    key={task._id}
    task={task}
    showPrivateButton={showPrivateButton} />;
});
```

```js
// Add a new proptype for showPrivateButton
propTypes: {
  task: React.PropTypes.object.isRequired,
  showPrivateButton: React.PropTypes.bool.isRequired
},
```

Let's add the button, using this new prop to decide whether it should be displayed:

```html
<!-- inside the render function of Task, under the checkbox code -->
{ this.props.showPrivateButton ? (
  <button className="toggle-private" onClick={this.togglePrivate}>
    { this.props.task.private ? "Private" : "Public" }
  </button>
) : ''}
```

We need to define the event handler called by the button:

```js
// Add this method on the Task component right below deleteThisTask()
togglePrivate() {
  Meteor.call("setPrivate", this.props.task._id, ! this.props.task.private);
},
```

One last thing, let's update the class of the `<li>` element in the `Task` component to reflect it's privacy status:

```js
// At the top of the render method of the Task component
render() {
  // Generate the className property in a separate variable
  const taskClassName = (this.props.task.checked ? "checked" : "") +
    (this.props.task.private ? "private" : "");

  // The checkbox is read-only because we are going to manually manage
  // its state.
  return (
    <li className={taskClassName}>
      <button className="delete" onClick={this.deleteThisTask}>
        &times;
      </button>

      // ... rest of render method
```

### Selectively publishing tasks based on privacy status

Now that we have a way of setting which tasks are private, we should modify our
publication function to only send the tasks that a user is authorized to see:

```js
// Modify the publish statement
// Only publish tasks that are public or belong to the current user
Meteor.publish("tasks", function () {
  return Tasks.find({
    $or: [
      { private: {$ne: true} },
      { owner: this.userId }
    ]
  });
});
```

To test that this functionality works, you can use your browser's private browsing mode to log in as a different user. Put the two windows side by side and mark a task private to confirm that the other user can't see it. Now make it public again and it will reappear!

In order to finish up our private task feature, we need to add checks to our `deleteTask` and `setChecked` methods to make sure only the task owner can delete or check off a private task:

```js
// Inside the deleteTask method
var task = Tasks.findOne(taskId);
if (task.private && task.owner !== Meteor.userId()) {
  // If the task is private, make sure only the owner can delete it
  throw new Meteor.Error("not-authorized");
}

// Inside the setChecked method
var task = Tasks.findOne(taskId);
if (task.private && task.owner !== Meteor.userId()) {
  // If the task is private, make sure only the owner can check it off
  throw new Meteor.Error("not-authorized");
}
```

We're done with our private task feature! Now our app is secure from attackers trying to view or modify someone's private tasks.
{{/template}}
