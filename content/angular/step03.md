{{#template name="angular-step03"}}

# Storing tasks in a collection

{{> step03CollectionsIntro tutorialName="simple-todos"}}

Let's update our client-side JavaScript code to get our tasks from a collection instead of a static array:

{{> DiffBox tutorialName="simple-todos-angular" step="3.3"}}

When you make these changes to the code, you'll notice that the tasks that used to be in the todo list have disappeared. That's because our database is currently empty &mdash; we need to insert some tasks!

{{> step03InsertingTasksFromConsole}}

{{/template}}
