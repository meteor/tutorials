{{#template name="blaze-step10"}}

# Filtering data with publish and subscribe

Now that we have moved all of our app's sensitive code into methods, we need to learn about the other half of Meteor's security story. Until now, we have worked assuming the entire database is present on the client, meaning if we call `Tasks.find()` we will get every task in the collection. That's not good if users of our application want to store privacy-sensitive data. We need a way of controlling which data Meteor sends to the client-side database.

Just like with `insecure` in the last step, all new Meteor apps start with the `autopublish` package. Let's remove it and see what happens:

```bash
meteor remove autopublish
```

When the app refreshes, the task list will be empty. Without the `autopublish` package, we will have to specify explicitly what the server sends to the client. The functions in Meteor that do this are `Meteor.publish` and `Meteor.subscribe`.

First lets add a publication for all tasks:

{{> DiffBox tutorialName="simple-todos" step="10.2"}}

And then let's subscribe to that publication when the `body` template is created:

{{> DiffBox tutorialName="simple-todos" step="10.3"}}

Once you have added this code, all of the tasks will reappear.

Calling `Meteor.publish` on the server registers a _publication_ named `"tasks"`. When `Meteor.subscribe` is called on the client with the publication name, the client _subscribes_ to all the data from that publication, which in this case is all of the tasks in the database. To truly see the power of the publish/subscribe model, let's implement a feature that allows users to mark tasks as "private" so that no other users can see them.

You can read more about publications in the [Data Loading article](http://guide.meteor.com/data-loading.html) of the Meteor Guide.

### Implementing private tasks

First, let's add another property to tasks called "private" and a button for users to mark a task as private. This button should only show up for the owner of a task. It will display the current state of the item.

{{> DiffBox tutorialName="simple-todos" step="10.4"}}

Let's make sure our task has a special class if it is marked private:

{{> DiffBox tutorialName="simple-todos" step="10.5"}}

We need to modify our JavaScript code in three places:

{{> DiffBox tutorialName="simple-todos" step="10.6"}}

{{> DiffBox tutorialName="simple-todos" step="10.7"}}

{{> DiffBox tutorialName="simple-todos" step="10.8"}}

### Selectively publishing tasks based on privacy status

Now that we have a way of setting which tasks are private, we should modify our
publication function to only send the tasks that a user is authorized to see:

{{> DiffBox tutorialName="simple-todos" step="10.9"}}

To test that this functionality works, simply mark a task as private and log out; log in again to make it reappear. You can also use your browser's private browsing mode to log in as a different user. Put the two windows side by side and mark a task private to confirm that the other user can't see it. Now make it public again and it will reappear!

### Extra method security

In order to finish up our private task feature, we need to add checks to our `deleteTask` and `setChecked` methods to make sure only the task owner can delete or check off a private task:

{{> DiffBox tutorialName="simple-todos" step="10.10"}}

> Notice that with this code anyone can delete any public task. With some small modifications to the code, you should be able to make it so that only the owner can delete their tasks.

We're done with our private task feature! Now our app is secure from attackers trying to view or modify someone's private tasks.

{{/template}}
