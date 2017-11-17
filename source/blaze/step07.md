
---
title: Storing temporary UI state in a Reactive Dictionary
---

In this step, we'll add a client-side data filtering feature to our app, so that users can check a box to only see incomplete tasks. We're going to learn how to use a [`ReactiveDict`](https://atmospherejs.com/meteor/reactive-dict) to store temporary reactive state on the client. A `ReactiveDict` is like a normal JS object with keys and values, but with built-in reactivity.

First, we need to add a checkbox to our HTML:

> TODO:INCLUDE: DiffBox tutorialName="simple-todos" step="7.1"

Now we need to add the `reactive-dict` package:

```bash
meteor add reactive-dict
```

Then we need to set up a new `ReactiveDict` and attach it to the body template instance (as this is where we'll store the checkbox's state) when it is first created:

> TODO:INCLUDE: DiffBox tutorialName="simple-todos" step="7.3"

Then, we need an event handler to update the `ReactiveDict` variable when the checkbox
is checked or unchecked. An event handler takes two arguments, the second of which is the same template instance which was `this` in the `onCreated` callback:

> TODO:INCLUDE: DiffBox tutorialName="simple-todos" step="7.4"

Now, we need to update `Template.body.helpers`. The code below has a new if
block to filter the tasks if the checkbox is checked:

> TODO:INCLUDE: DiffBox tutorialName="simple-todos" step="7.5"

Now if you check the box, the task list will only show tasks that haven't been completed.

### ReactiveDicts are reactive data stores for the client

Until now, we have stored all of our state in collections, and the view updated automatically when we modified the data inside these collections. This is because Mongo.Collection is recognized by Meteor as a _reactive data source_, meaning Meteor knows when the data inside has changed. `ReactiveDict` is the same way, but is not synced with the server like collections are. This makes a `ReactiveDict` a convenient place to store temporary UI state like the checkbox above. Just like with collections, we don't have to write any extra code for the template to update when the `ReactiveDict` variable changes &mdash; just calling `instance.state.get(...)` inside the helper is enough.

You can read more about patterns for writing components in the [Blaze article](http://guide.meteor.com/blaze.html) of the Meteor Guide.


### One more feature: Showing a count of incomplete tasks

Now that we have written a query that filters out completed tasks, we can use the same query to display a count of the tasks that haven't been checked off. To do this we need to add a helper and change one line of the HTML.

> TODO:INCLUDE: DiffBox tutorialName="simple-todos" step="7.6"

> TODO:INCLUDE: DiffBox tutorialName="simple-todos" step="7.7"

