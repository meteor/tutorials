{{#template name="step03CollectionsIntro"}}

Collections are Meteor's way of storing persistent data. The special thing about collections in Meteor is that they can be accessed from both the server and the client, making it easy to write view logic without having to write a lot of server code. They also update themselves automatically, so a view component backed by a collection will automatically display the most up-to-date data.

You can read more about collections in the [Collections article](http://guide.meteor.com/collections.html) of the Meteor Guide.

Creating a new collection is as easy as calling `MyCollection = new Mongo.Collection("MyCollection");` in your JavaScript. On the server, this sets up a MongoDB collection called `MyCollection`; on the client, this creates a cache connected to the server collection. We'll learn more about the client/server divide in step 12, but for now we can write our code with the assumption that the entire database is present on the client.

To create the collection, we define a new `tasks` module that creates a Mongo collection and exports it:

{{> DiffBox tutorialName=tutorialName step="3.1"}}

Notice that we place this file in a new `imports/api` directory. This is a sensible place to store the API of your application---for now the collections that we'll use, and later the Publications that read from them and the Methods that write to them. You can read more about how to structure your code in the [Application Structure article](http://guide.meteor.com/structure.html) of the Meteor Guide.

We need to import that module on the server (this creates the MongoDB collection and sets up the plumbing to get the data to the client):

{{> DiffBox tutorialName=tutorialName step="3.2"}}

{{/template}}

{{#template name="step03InsertingTasksFromConsole"}}

### Inserting tasks from the server-side database console

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

{{#template name="step09OptimisticUI"}}

### Optimistic UI

So why do we want to define our methods on the client and on the server? We do this to enable a feature we call _optimistic UI_.

When you call a method on the client using `Meteor.call`, two things happen in parallel:

1. The client sends a request to the server to run the method in a secure environment, just like an AJAX request would work
2. A simulation of the method runs directly on the client to attempt to predict the outcome of the server call using the available information

What this means is that a newly created task actually appears on the screen _before_ the result comes back from the server.

If the result from the server comes back and is consistent with the simulation on the client, everything remains as is. If the result on the server is different from the result of the simulation on the client, the UI is patched to reflect the actual state of the server.


You can read more about methods and optimistic UI in the [Methods article](http://guide.meteor.com/methods.html) of the Meteor Guide, and our [blog post about optimistic UI](http://info.meteor.com/blog/optimistic-ui-with-meteor-latency-compensation).

{{/template}}
