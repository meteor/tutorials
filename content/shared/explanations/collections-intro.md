Collections are Meteor's way of storing persistent data. The special thing about collections in Meteor is that they can be accessed from both the server and the client, making it easy to write view logic without having to write a lot of server code. They also update themselves automatically, so a view component backed by a collection will automatically display the most up-to-date data.

You can read more about collections in the [Collections article](http://guide.meteor.com/collections.html) of the Meteor Guide.

Creating a new collection is as easy as calling `MyCollection = new Mongo.Collection("my-collection");` in your JavaScript. On the server, this sets up a MongoDB collection called `my-collection`; on the client, this creates a cache connected to the server collection. We'll learn more about the client/server divide in step 12, but for now we can write our code with the assumption that the entire database is present on the client.

To create the collection, we define a new `tasks` module that creates a Mongo collection and exports it:

**3.1 Create tasks collection (`imports/api/tasks.js`)**
```js
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
```

Notice that we place this file in a new `imports/api` directory. This is a sensible place to store API-related files for the application. We will start by putting "collections" here and later we will add "publications" that read from them and "methods" that write to them. You can read more about how to structure your code in the [Application Structure article](http://guide.meteor.com/structure.html) of the Meteor Guide.

We need to import that module on the server (this creates the MongoDB collection and sets up the plumbing to get the data to the client):

**3.2 Load tasks collection on the server (`server/main.js`)**
```js
import '../imports/api/tasks.js';
```
