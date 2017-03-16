{{#template name="sharedStep01"}}

# Creating your first app

In this tutorial, we are going to create a simple app to manage a 'to do' list and collaborate with others on those tasks.

To create the app, open your terminal and type:

```bash
meteor create simple-todos
```

This will create a new folder called `simple-todos` with all of the files that a Meteor app needs:

```bash
client/main.js        # a JavaScript entry point loaded on the client
client/main.html      # an HTML file that defines view templates
client/main.css       # a CSS file to define your app's styles
server/main.js        # a JavaScript entry point loaded on the server
package.json          # a control file for installing NPM packages
.meteor               # internal Meteor files
.gitignore            # a control file for git
```

To run the newly created app:

```bash
cd simple-todos
meteor npm install
meteor
```

Open your web browser and go to `http://localhost:3000` to see the app running.

You can play around with this default app for a bit before we continue. For example, try editing the text in `<h1>` inside `client/main.html` using your favorite text editor. When you save the file, the page in your browser will automatically update with the new content. We call this "hot code push".

Now that you have some experience editing the files in your Meteor app, let's start working on a simple todo list application. 

### Feedback

If you find a bug or error in the tutorial, please file an issue or submit a pull request [on GitHub](https://github.com/meteor/tutorials).
{{/template}}
