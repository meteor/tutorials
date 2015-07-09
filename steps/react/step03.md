{{#template name="react-step03"}}

# Storing tasks in a collection

Collections are Meteor's way of storing persistent data. The special thing about collections in Meteor is that they can be accessed from both the server and the client, making it easy to write view logic without having to write a lot of server code. They also update themselves automatically, so a component backed by a collection will automatically display the most up-to-date data.

Creating a new collection is as easy as calling `MyCollection = new Mongo.Collection("my-collection");` in your JavaScript. On the server, this sets up a MongoDB collection called `my-collection`; on the client, this creates a cache connected to the server collection. We'll learn more about the client/server divide in step 12, but for now we can write our code with the assumption that the entire database is present on the client.

Let's update our code to get our tasks from a collection instead of a static array. We need to define a collection at the top of the file, and update our component to use this collection.

```js
// simple-todos-react.jsx

// Define a collection to hold our tasks
Tasks = new Mongo.Collection("tasks");

App = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      tasks: Tasks.find({}).fetch()
    }
  },

  renderTasks() {
    // Get tasks from this.data.tasks
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  // ... rest of the methods are unchanged
```

When you make these changes to the code, you'll notice that the tasks that used to be in the todo list have disappeared. That's because our database is currently empty &mdash; we need to insert some tasks!

### Inserting tasks from the console

Items inside collections are called _documents_. Let's use the server database console to insert some documents into our collection. In a new terminal tab, go to your app directory and type:

```bash
meteor mongo
```

This opens a console into your app's local development database. Into the prompt, type:

```js
db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
```

In your web browser, you will see the UI of your app immediately update to show the new task. You can see that we didn't have to write any code to connect the server-side database to our front-end code &mdash; it just happened automatically.

Insert a few more tasks from the database console with different text. In the next step, we'll see how to add functionality to our app's UI so that we can add tasks without using the database console.

{{/template}}
