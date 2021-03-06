{{#template name="vue-step04"}}

# Adding tasks with a form

In this step, we'll add an input field for users to add new tasks to the list.

First, let's add a form to our `App` component's template section and a `newTask` field to the `data` object in our Vue instance:

{{> DiffBox step="4.1" tutorialName="simple-todos-vue"}}

This form will have an input element added to it that has a `v-model` attribute. The `newTask` data field will now be bound via two-way binding to the input element's value.

You can also see that the `form` element has a `@submit.prevent` attribute that references a method called `handleSubmit` that we will later be defined in the component's `methods` object. In Vue, this is how you listen to browser events, like the submit event on the form.

We can now add that `handleSubmit` method to our `App` component's `methods` object:

{{> DiffBox step="4.2" tutorialName="simple-todos-vue"}}

Now your app has a new input field. To add a new task, just type into the input field and hit enter. If you open a new browser window and open the app again, you'll see that the list is automatically synchronized between all clients.

### Listening for events in Vue

As you can see, in Vue you handle DOM events by directly referencing a method on the component. Inside the event handler, you can reference elements from the component by giving them a `v-model` property and adding a field to the data property. Read more about the different kinds of events Vue supports, and how the event system works, in the [Vue.js Guide](https://vuejs.org/v2/guide/#Handling-User-Input).

### Inserting into a collection

Inside the event handler, we are adding a task to the `tasks` collection by calling `Tasks.insert()`. We can assign any properties to the task object, such as the time created, since we don't ever have to define a schema for the collection.

Being able to insert anything into the database from the client isn't very secure, but it's okay for now. In step 10 we'll learn how we can make our app secure and restrict how data is inserted into the database.

### Sorting our tasks

Currently, our code displays all new tasks at the bottom of the list. That's not very good for a task list, because we want to see the newest tasks first.

We can solve this by sorting the tasks using the `createdAt` field that is automatically added by our new code. Just add a sort option to the `Tasks.find` call inside the `App` component:

{{> DiffBox step="4.3" tutorialName="simple-todos-vue"}}

Let's go back to the browser and make sure this worked: any new tasks that you add should appear at the top of the list, rather than at the bottom.

In the next step, we'll add some very important todo list features: checking off and deleting tasks.
{{/template}}
