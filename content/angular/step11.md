{{#template name="angular-step11"}}

# Filtering data with publish and subscribe

Now that we have moved all of our app's sensitive code into methods, we need to learn about the other half of Meteor's security story. Until now, we have worked assuming the entire database is present on the client, meaning if we call `Tasks.find()` we will get every task in the collection. That's not good if users of our application want to store privacy-sensitive data. We need a way of controlling which data Meteor sends to the client-side database.

Just like with `insecure` in the last step, all new Meteor apps start with the `autopublish` package. Let's remove it and see what happens:

```bash
meteor remove autopublish
```

When the app refreshes, the task list will be empty. Without the `autopublish` package, we will have to specify explicitly what the server sends to the client. The functions in Meteor that do this are `Meteor.publish` and [$scope.$meteorSubscribe](http://angular-meteor.com/api/subscribe).

Let's add them now.

```js
// At the bottom of simple-todos.js
if (Meteor.isServer) {
  Meteor.publish("tasks", function () {
    return Tasks.find();
  });
}
```

```js
// At the top of our controller code
$scope.$meteorSubscribe("tasks");
```

Once you have added this code, all of the tasks will reappear.

Calling `Meteor.publish` on the server registers a _publication_ named `"tasks"`. When [$scope.$meteorSubscribe](http://angular-meteor.com/api/subscribe) is called on the client with the publication name, the client _subscribes_ to all the data from that publication, which in this case is all of the tasks in the database. To truly see the power of the publish/subscribe model, let's implement a feature that allows users to mark tasks as "private" so that no other users can see them.

### Implementing private tasks

First, let's add another property to tasks called "private" and a button for users to mark a task as private. This button should only show up for the owner of a task. It will display the current state of the item.

```html
<!-- add right below the code for the checkbox in the task template -->
<button class="toggle-private"
        ng-if="task.owner === $root.currentUser._id"
        ng-click="setPrivate(task)">
  {{dstache}}task.private == true ? "Private" : "Public"}}
</button>

<!-- modify the li tag to have the private class if the item is private -->
<li ng-class="{'checked': task.checked, 'private': task.private}">
```

We need to modify our JavaScript code in three places:

```js
// Add a setPrivate scope function
$scope.setPrivate = function(task) {
  $meteor.call("setPrivate", task._id, ! task.private);
};

// Add a method to Meteor.methods called setPrivate
setPrivate: function (taskId, setToPrivate) {
  var task = Tasks.findOne(taskId);

  // Make sure only the task owner can make a task private
  if (task.owner !== Meteor.userId()) {
    throw new Meteor.Error("not-authorized");
  }

  Tasks.update(taskId, { $set: { private: setToPrivate } });
}
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

### Extra method security

In order to finish up our private task feature, we need to add checks to our `deleteTask` and `setChecked` methods to make sure only the task owner can delete or check off a private task:

```js
// At the top of the deleteTask method
var task = Tasks.findOne(taskId);
if (task.private && task.owner !== Meteor.userId()) {
  // If the task is private, make sure only the owner can delete it
  throw new Meteor.Error("not-authorized");
}

// At the top of the setChecked method
var task = Tasks.findOne(taskId);
if (task.private && task.owner !== Meteor.userId()) {
  // If the task is private, make sure only the owner can check it off
  throw new Meteor.Error("not-authorized");
}
```

> Notice that with this code anyone can delete any public task. With some small modifications to the code, you should be able to make it so that only the owner can delete their tasks.

We're done with our private task feature! Now our app is secure from attackers trying to view or modify someone's private tasks.

{{/template}}
