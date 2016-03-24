{{#template name="angular-step05"}}

# Checking off and deleting tasks

Until now, we have only interacted with a collection by inserting documents. Now, we will learn how to update and remove them.

Let's add two elements to our `todosList` component, a checkbox and a delete button:

{{> DiffBox tutorialName="simple-todos-angular" step="5.1"}}

{{> DiffBox tutorialName="simple-todos-angular" step="5.2"}}

### Update

As you can see we added two directives.

To watch `checked` state of each task.

```html
ng-checked="task.checked"
```

And to change current state by calling `setChecked` method of the controller.

```html
ng-click="$ctrl.setChecked(task)"
```

### Delete

We can delete task by clicking `removeTask` method.

### Classes

If you try checking off some tasks after adding all of the above code, you will see that checked off tasks have a line through them.

Here we bind the checked state of a task to a class with `ng-class`:

```html
<li ng-class="{'checked': task.checked}">
```

With this code, if the `checked` property of a task is `true`, the `checked` class is added to our list item. Using this class, we can make checked-off tasks look different in our CSS.
{{/template}}
