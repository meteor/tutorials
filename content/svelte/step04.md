{{#template name="svelte-step04"}}

# Adding tasks with a form

In this step, we'll add an input field for users to add new tasks to the list.

First, let's add a form and a form input to our `App` component's markup section. Then we will add a `newTask` property to the `App` component's script section:

{{> DiffBox step="4.1" tutorialName="simple-todos-svelte"}}

This form's input tag will have a `bind:value` attribute added to it and this will bind the input's value to the `newTask` property.

Next, the `handleSubmit` method will be added to the `App` component's script section. In order to execute the `handleSubmit` function on our form's submit event we will add the `on:submit|preventDefault` attribute to the form tag:

{{> DiffBox step="4.2" tutorialName="simple-todos-svelte"}}

To add a new task, just type into the input field and hit enter. If you open a new browser window and open the app again, you'll see that the list is automatically synchronized between all clients.

### Inserting into a collection

Inside the event handler, we are adding a task to the `tasks` collection by calling `Tasks.insert()`. We can assign any properties to the task object, such as the time created, since we don't ever have to define a schema for the collection.

Being able to insert anything into the database from the client isn't very secure, but it's okay for now. In step 10 we'll learn how we can make our app secure and restrict how data is inserted into the database.

### Sorting our tasks

Currently, our code displays all new tasks at the bottom of the list. That's not very good for a task list, because we want to see the newest tasks first.

We can solve this by sorting the results using the `createdAt` field that is automatically added by our new code. Just add a sort option to the `Tasks.find` call inside the `App` component:

{{> DiffBox step="4.3" tutorialName="simple-todos-svelte"}}

Let's go back to the browser and make sure this worked: any new tasks that you add should appear at the top of the list, rather than at the bottom.

In the next step, we'll add some very important todo list features: checking off and deleting tasks.
{{/template}}
