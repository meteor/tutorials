{{#template name="react-step03"}}

# Storing tasks in a collection

{{> step03CollectionsIntro}}

Let's update our code to get our tasks from a collection instead of a static array. A summary of the changes, all are inside `simple-todos-react.jsx`:

1. Define a collection at the top of the file
2. Add a `mixins:` property to the `App` component definition
3. Add a `getMeteorData` method to the `App` component
4. Modify `renderTasks` to get task data from `this.data.tasks`

{{> CodeBox step="3.1" view="react"}}

When you make these changes to the code, you'll notice that the tasks that used to be in the todo list have disappeared. That's because our database is currently empty &mdash; we need to insert some tasks!

{{> step03InsertingTasksFromConsole}}

{{/template}}
