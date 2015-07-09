{{#template name="angular-step03"}}

# Storing tasks in a collection

Collections are Meteor's way of storing persistent data. The special thing about collections in Meteor is that they can be accessed from both the server and the client, making it easy to write view logic without having to write a lot of server code. They also update themselves automatically, so a template backed by a collection will automatically display the most up-to-date data.

Creating a new collection is as easy as calling `MyCollection = new Mongo.Collection("my-collection");` in your JavaScript. On the server, this sets up a MongoDB collection called `my-collection`; on the client, this creates a cache connected to the server collection. We'll learn more about the client/server divide in step 12, but for now we can write our code with the assumption that the entire database is present on the client.

Let's update our JavaScript code to get our tasks from a collection instead of a static array:

```js
// simple-todos-angular.js
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {

	// This code only runs on the client
	angular.module("simple-todos",['angular-meteor']);

	angular.module("simple-todos").controller("TodosListCtrl", ['$scope', '$meteor',
	  function($scope, $meteor){

	    $scope.tasks = $meteor.collection(Tasks);

	}]);
}
```

We are using the `$meteor` service to bind our `Tasks` collection to our `$scope.tasks` variable.
Now every change that will happen to each of those objects will be synced in real time across our stack.

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

In your web browser, you will see the UI of your app immediately update to show the new task.
You can see that we didn't have to write any explicit code to update our front-end code with the server-side database&mdash; it just happened automatically.

Insert a few more tasks from the database console with different text. In the next step, we'll see how to add functionality to our app's UI so that we can add tasks without using the database console.

{{/template}}
