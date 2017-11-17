{{#template name="angular-step07"}}

---
title: Filtering collections
---

In this step, we'll add a client-side data filtering feature to our app, so that users can check a box to see only incomplete tasks.

We're going to learn how to use Mongo's filtering API.

First, we need to add a checkbox to our HTML:

{{> DiffBox tutorialName="simple-todos-angular" step="7.1"}}

This checkbox binds to the controller's `hideCompleted` variable.

Now, we need to update our `tasks` query each time `hideCompleted` changes.

### Filtering collection syntax

The query that returns all tasks (the current query looks like that:

```js
Tasks.find({}, { sort: { createdAt: -1 } })
```

and the query to return only the not completed todos looks like that:

```js
Tasks.find({ checked: {$ne: true} }, { sort: { createdAt: -1 } })
```

### Add reactivity

We somehow want to update the query every time `hideComplete` changes.

Let's implement some reactivity into `tasks` helper:

{{> DiffBox tutorialName="simple-todos-angular" step="7.2"}}

As you can see, we used `getReactively()` method. You can read more about it in the following chapter.

### Connecting Angular bindings to Meteor's reactivity

To make Meteor understand Angular bindings and the other way around, we use [$scope.getReactively](http://angular-meteor.com/api/getReactively) function that turns Angular
scope variables into [Meteor reactive variables](http://docs.meteor.com/#/full/reactivevar_pkg).

Now if you check the box, the task list will only show tasks that haven't been completed.

> To learn more about the [getReactively](http://angular-meteor.com/api/getReactively) feature
> you can try the [advanced tutorial](http://angular-meteor.com/tutorial/step_12).

### One more feature: Showing a count of incomplete tasks

Now that we have written a query that filters out completed tasks, we can use the same query to display a count of the tasks that haven't been checked off. To do this we need to add a scope function and change one line of the HTML.

{{> DiffBox tutorialName="simple-todos-angular" step="7.3"}}

{{> DiffBox tutorialName="simple-todos-angular" step="7.4"}}

{{/template}}
