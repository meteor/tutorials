{{#template name="react-step04"}}

# Adding tasks with a form

In this step, we'll add an input field for users to add tasks to the list.

First, let's add a form to our `App` component:

```
<header>
  <h1>Todo List</h1>

  <!-- add a form right below the h1 -->
  <form className="new-task" onSubmit={this.handleSubmit} >
    <input
      type="text"
      ref="textInput"
      placeholder="Type to add new tasks" />
  </form>
</header>
```

You can see that the `form` element has an `onSubmit` attribute that references a method on the component called `handleSubmit`. This is how you listen to browser events, like the submit event on the form, in React. The `input` element has a `ref` property which will let us easily access this element later.

Let's add a `handleSubmit` method to our `App` component:

```js
// Inside the App component, below getMeteorData() and above render()
handleSubmit(event) {
  event.preventDefault();

  // Find the text field via the React ref
  var text = React.findDOMNode(this.refs.textInput).value.trim();

  Tasks.insert({
    text: text,
    createdAt: new Date() // current time
  });

  // Clear form
  React.findDOMNode(this.refs.textInput).value = "";
},
```

Now your app has a new input field. To add a task, just type into the input field and hit enter. If you open a new browser window and open the app again, you'll see that the list is automatically synchronized between all clients.

### Listening for events in React

...

### Inserting into a collection

Inside the event handler, we are adding a task to the `tasks` collection by calling `Tasks.insert()`. We can assign any properties to the task object, such as the time created, since we don't ever have to define a schema for the collection.

Being able to insert anything into the database from the client isn't very secure, but it's okay for now. In step 10 we'll learn how we can make our app secure and restrict how data is inserted into the database.

### Sorting our tasks

Currently, our code displays all new tasks at the bottom of the list. That's not very good for a task list, because we want to see the newest tasks first.

We can solve this by sorting the results using the `createdAt` field that is automatically added by our new code. Just add a sort option to the `find` call inside `getMeteorData` on the `App` component:

```js
getMeteorData() {
  return {
    tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch()
  }
},
```

In the next step, we'll add some very important todo list functions: checking off and deleting tasks.
{{/template}}
