{{#template name="step11SelectivelyPublish"}}

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

> Notice that with this code anyone can delete any public task. With some small modifications to the code, you should be able to make it so that only the owner can delete their tasks.

We're done with our private task feature! Now our app is secure from attackers trying to view or modify someone's private tasks.

{{/template}}
