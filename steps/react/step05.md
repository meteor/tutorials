{{#template name="react-step05"}}

# Checking off and deleting tasks

Until now, we have only interacted with a collection by inserting documents. Now, we will learn how to update and remove them.

Let's add two new elements to our `task` component, a checkbox and a delete button, with event handlers for both:

{{> CodeBox step="5.1" view="react"}}

### Update

In the code above, we have:

```js
// Set the checked property to the opposite of its current value
Tasks.update(this.props.task._id, {
  $set: {checked: ! this.props.task.checked}
});
```

The `update` function on a collection takes two arguments. The first is a selector that identifies a subset of the collection, and the second is an update parameter that specifies what should be done to the matched objects.

In this case, the selector is just the `_id` of the relevant task. The update parameter uses `$set` to toggle the `checked` field, which will represent whether the task has been completed.

### Remove

This code from above removes a task:

```js
Tasks.remove(this.props.task._id);
```

The `remove` function takes one argument, a selector that determines which item to remove from the collection.

{{/template}}
