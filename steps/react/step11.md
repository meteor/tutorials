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

Let's add another property to tasks called "private" and a button for users to mark a task as private. This button should only show up for the owner of a task. We want the label to indicate the current status: public or private.

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
// Update the renderTasks method to pass in showPrivateButton
renderTasks() {
  // Get tasks from this.data.tasks
  return this.data.tasks.map((task) => {
    const showPrivateButton = task.owner === this.data.currentUser._id;

    return <Task
      key={task._id}
      task={task}
      showPrivateButton={showPrivateButton} />;
  });
},
```

```js
// Add a new prop type for showPrivateButton
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
  // Add checked and/or private to the className when needed
  const taskClassName = (this.props.task.checked ? "checked" : "") + " " +
    (this.props.task.private ? "private" : "");

  // ... rest of method
```

{{> step11SelectivelyPublish}}

{{/template}}
